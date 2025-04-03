export class SuccessResDTO {
  statusCode: string;
  data: any;

  constructor(partial: Partial<SuccessResDTO>) {
    Object.assign(this, partial);
  }
}
