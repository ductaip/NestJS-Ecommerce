import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthType, ConditionGuard } from 'src/shared/constants/auth.constant';
import {
  AUTH_TYPE_KEY,
  AuthTypeDecoratorPayload,
} from 'src/shared/decorators/auth.decorator';
import { AccessTokenGuard } from 'src/shared/guards/access-token.guard';
import { APIKeyGuard } from 'src/shared/guards/api-key.guard';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private authTypeGuardMap: Record<string, CanActivate>;

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly apiKeyGuard: APIKeyGuard,
  ) {
    this.authTypeGuardMap = {
      [AuthType.Bearer]: this.accessTokenGuard,
      [AuthType.APIKey]: this.apiKeyGuard,
      [AuthType.None]: { canActivate: () => true },
    };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('authentication guard');
    const authTypeValue = this.reflector.getAllAndOverride<
      AuthTypeDecoratorPayload | undefined
    >(AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ?? {
      authTypes: [AuthType.None],
      options: { condition: ConditionGuard.And },
    };
    const guards = authTypeValue.authTypes.map(
      (authType) => this.authTypeGuardMap[authType],
    );
    let error = new UnauthorizedException();
    console.log('authTypeValue', authTypeValue);
    console.log('guards', guards);
    if (authTypeValue.options.condition === ConditionGuard.Or) {
      for (const instance of guards) {
        const canActivate = await Promise.resolve(
          instance.canActivate(context),
        ).catch((err) => {
          error = err;
          return false;
        });
        if (canActivate) {
          return true;
        }
      }
      throw error;
    } else {
      for (const instance of guards) {
        const canActivate = await Promise.resolve(
          instance.canActivate(context),
        ).catch((err) => {
          error = err;
          console.log('err', err, instance);

          return false;
        });
        if (!canActivate) {
          throw new UnauthorizedException();
        }
      }
      return true;
    }
  }
}
