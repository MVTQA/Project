Code for creating the Sales table and inserting records in MySQL

Create Table Sales(SaleID int(3) Auto_Increment Primary Key, ProductName varchar(20), Quantity int(3), 
Price float, SaleDate date);

Insert Into Sales (ProductName, Quantity, Price, SaleDate) Values('A', 12, 0.5, 'now()');

Insert Into Sales (ProductName, Quantity, Price, SaleDate) Values('B', 14, 1.5 , 'now()');

Insert Into Sales (ProductName, Quantity, Price, SaleDate) Values('C', 16, 2.5, 'now()');

Insert Into Sales (ProductName, Quantity, Price, SaleDate) Values('D', 18, 3.5, 'now()');