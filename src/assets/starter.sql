CREATE TABLE IF NOT EXISTS category(category_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, category_name TEXT, category_parent INTEGER, FOREIGN KEY(category_parent) REFERENCES category(id));
CREATE TABLE IF NOT EXISTS room(room_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, room_name);
CREATE TABLE IF NOT EXISTS item(item_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, item_name TEXT, item_description TEXT, item_parent INTEGER,category_id INTEGER, room_id INTEGER, number_times_used INTEGER, price TEXT, pic_location TEXT , FOREIGN KEY(item_parent) REFERENCES item(id), FOREIGN KEY(category_id) REFERENCES category(category_id), FOREIGN KEY(room_id) REFERENCES room(room_id));
CREATE TABLE IF NOT EXISTS lists(lists_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, lists_name TEXT);
CREATE TABLE IF NOT EXISTS item_list(item_list_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, list_id INTEGER, item_id INTEGER, FOREIGN KEY(item_id) REFERENCES item(id),FOREIGN KEY(list_id) REFERENCES lists(id));
INSERT INTO category( category_name,category_parent) VALUES ('Appliances',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Clothing',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Decorations',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Consumables',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Crafts',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Collections',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Documents',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Furnishings',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Furniture',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Health',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Sporting Goods',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Electronics',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Toys',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Tools',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Spare parts',NULL);
INSERT INTO category( category_name,category_parent) VALUES ('Cleaning',1);
INSERT INTO category( category_name,category_parent) VALUES ('Food Prep',1);
INSERT INTO category( category_name,category_parent) VALUES ('Cookware',1);
INSERT INTO category( category_name,category_parent) VALUES ('Fans',1);
INSERT INTO category( category_name,category_parent) VALUES ('Bathroom',1);
INSERT INTO category( category_name,category_parent) VALUES ('Accessories',2);
INSERT INTO category( category_name,category_parent) VALUES ('Footwear',2);
INSERT INTO category( category_name,category_parent) VALUES ('Formal',2);
INSERT INTO category( category_name,category_parent) VALUES ('Headware',2);
INSERT INTO category( category_name,category_parent) VALUES ('Sports',2);
INSERT INTO category( category_name,category_parent) VALUES ('Street clothes',2);
INSERT INTO category( category_name,category_parent) VALUES ('Underwear',2);
INSERT INTO category( category_name,category_parent) VALUES ('Outerwear',2);
INSERT INTO category( category_name,category_parent) VALUES ('Functional Accessories',21);
INSERT INTO category( category_name,category_parent) VALUES ('Fashion Accessories',21);
INSERT INTO category( category_name,category_parent) VALUES ('Jewelry',21);
INSERT INTO category( category_name,category_parent) VALUES ('Shoes',22);
INSERT INTO category( category_name,category_parent) VALUES ('Boots',22);
INSERT INTO category( category_name,category_parent) VALUES ('Sandals',22);
INSERT INTO category( category_name,category_parent) VALUES ('Work Clothes',23);
INSERT INTO category( category_name,category_parent) VALUES ('Fancy Clothes',23);
INSERT INTO category( category_name,category_parent) VALUES ('Hats',24);
INSERT INTO category( category_name,category_parent) VALUES ('Scarves',24);
INSERT INTO category( category_name,category_parent) VALUES ('Swimwear',25);
INSERT INTO category( category_name,category_parent) VALUES ('Workout Clothes',25);
INSERT INTO category( category_name,category_parent) VALUES ('Tops',26);
INSERT INTO category( category_name,category_parent) VALUES ('Bottoms',26);
INSERT INTO category( category_name,category_parent) VALUES ('Dresses',26);
INSERT INTO category( category_name,category_parent) VALUES ('Light Jackets',28);
INSERT INTO category( category_name,category_parent) VALUES ('Heavy Jackets',28);
INSERT INTO category( category_name,category_parent) VALUES ('Artwork',3);
INSERT INTO category( category_name,category_parent) VALUES ('Accent pieces',3);
INSERT INTO category( category_name,category_parent) VALUES ('Souvenirs',3);
INSERT INTO category( category_name,category_parent) VALUES ('Food',4);
INSERT INTO category( category_name,category_parent) VALUES ('Drinks',4);
INSERT INTO category( category_name,category_parent) VALUES ('Ingredients',4);
INSERT INTO category( category_name,category_parent) VALUES ('Canned/Bottled',50);
INSERT INTO category( category_name,category_parent) VALUES ('Frozen',50);
INSERT INTO category( category_name,category_parent) VALUES ('Long-life',50);
INSERT INTO category( category_name,category_parent) VALUES ('Snacks',50);
INSERT INTO category( category_name,category_parent) VALUES ('Beer',51);
INSERT INTO category( category_name,category_parent) VALUES ('Alcohol',51);
INSERT INTO category( category_name,category_parent) VALUES ('Wine',51);
INSERT INTO category( category_name,category_parent) VALUES ('Soft Drinks',51);
INSERT INTO category( category_name,category_parent) VALUES ('Spices',52);
INSERT INTO category( category_name,category_parent) VALUES ('Grains',52);
INSERT INTO category( category_name,category_parent) VALUES ('Legumes',52);
INSERT INTO category( category_name,category_parent) VALUES ('Pastas',52);
INSERT INTO category( category_name,category_parent) VALUES ('Sauces',52);
INSERT INTO category( category_name,category_parent) VALUES ('Seasoning',52);
INSERT INTO category( category_name,category_parent) VALUES ('Building Materials',5);
INSERT INTO category( category_name,category_parent) VALUES ('Fabrics',5);
INSERT INTO category( category_name,category_parent) VALUES ('Wood',67);
INSERT INTO category( category_name,category_parent) VALUES ('Plastic',67);
INSERT INTO category( category_name,category_parent) VALUES ('Fasteners',67);
INSERT INTO category( category_name,category_parent) VALUES ('Pipe',67);
INSERT INTO category( category_name,category_parent) VALUES ('Cards',6);
INSERT INTO category( category_name,category_parent) VALUES ('Publications',6);
INSERT INTO category( category_name,category_parent) VALUES ('Books',73);
INSERT INTO category( category_name,category_parent) VALUES ('Textbooks',73);
INSERT INTO category( category_name,category_parent) VALUES ('Magazines',73);
INSERT INTO category( category_name,category_parent) VALUES ('Newspapaers',73);
INSERT INTO category( category_name,category_parent) VALUES ('Offical Documents',7);
INSERT INTO category( category_name,category_parent) VALUES ('Notes',7);
INSERT INTO category( category_name,category_parent) VALUES ('Statements',7);
INSERT INTO category( category_name,category_parent) VALUES ('Stationary',7);
INSERT INTO category( category_name,category_parent) VALUES ('Towels',8);
INSERT INTO category( category_name,category_parent) VALUES ('Bedding',8);
INSERT INTO category( category_name,category_parent) VALUES ('Pillows',8);
INSERT INTO category( category_name,category_parent) VALUES ('Fixtures',9);
INSERT INTO category( category_name,category_parent) VALUES ('Cabinetry',9);
INSERT INTO category( category_name,category_parent) VALUES ('Tables',9);
INSERT INTO category( category_name,category_parent) VALUES ('Lighting',9);
INSERT INTO category( category_name,category_parent) VALUES ('Outdoor',9);
INSERT INTO category( category_name,category_parent) VALUES ('Cosmetics',10);
INSERT INTO category( category_name,category_parent) VALUES ('Hygiene',10);
INSERT INTO category( category_name,category_parent) VALUES ('Medical Products',10);
INSERT INTO category( category_name,category_parent) VALUES ('Balls',11);
INSERT INTO category( category_name,category_parent) VALUES ('Gym Equipment',11);
INSERT INTO category( category_name,category_parent) VALUES ('Raquets',11);
INSERT INTO category( category_name,category_parent) VALUES ('Computers',12);
INSERT INTO category( category_name,category_parent) VALUES ('Headphones',12);
INSERT INTO category( category_name,category_parent) VALUES ('Wires',12);
INSERT INTO category( category_name,category_parent) VALUES ('Flash Drives',12);
INSERT INTO category( category_name,category_parent) VALUES ('Misc',12);
INSERT INTO category( category_name,category_parent) VALUES ('Board games',13);
INSERT INTO category( category_name,category_parent) VALUES ('Video Games',13);
INSERT INTO category( category_name,category_parent) VALUES ('Consoles',13);
INSERT INTO category( category_name,category_parent) VALUES ('Card Games',13);
INSERT INTO category( category_name,category_parent) VALUES ('Gardening Tools',14);
INSERT INTO category( category_name,category_parent) VALUES ('Automotive Tools',14);
INSERT INTO category( category_name,category_parent) VALUES ('Household Tools',14);
