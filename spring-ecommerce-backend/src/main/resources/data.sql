INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Devices and gadgets for everyday use'),
    ('Apparel', 'Clothing and fashion accessories')
ON CONFLICT DO NOTHING;

INSERT INTO products (name, description, price, stock, category_id)
SELECT 'Wireless Headphones', 'Noise cancelling over-ear headphones', 199.99, 50, id FROM categories WHERE name = 'Electronics'
ON CONFLICT DO NOTHING;

INSERT INTO products (name, description, price, stock, category_id)
SELECT 'Cotton T-Shirt', 'Soft cotton t-shirt available in multiple colors', 29.99, 150, id FROM categories WHERE name = 'Apparel'
ON CONFLICT DO NOTHING;
