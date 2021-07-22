using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Sales_Project
{
    class Sales1
    {
        MySqlConnection C;
        MySqlCommand cmd;

        public Sales1()
        {

            string ConnectionString = "server=localhost; user=root;password=root;database=NBS1";
            C = new MySqlConnection(ConnectionString);
            C.Open();
            cmd = new MySqlCommand();
            cmd.Connection = C;

        }

        public void MainMenu()
        {

            Console.WriteLine("Please Enter Your Choice:");

            Console.WriteLine("1: Data Entry");

            Console.WriteLine("2: Reports");

            string Choice = Console.ReadLine();

            if (Choice == "1")
            {

                DataEntry();

            }

            if (Choice == "2")
            {

                Reports();

            }

            else
            {

                Console.WriteLine("Please Enter Either 1 or 2");

            }

            Console.Read();

        }

        private void DataEntry()
        {

            Console.WriteLine("Please Enter The Product Name:");
            string ProductName = Console.ReadLine();

            Console.WriteLine("Please Enter The Quantity:");
            string Quantity = Console.ReadLine();

            Console.WriteLine("Please Enter The Price:");
            string Price = Console.ReadLine();

            cmd.CommandText = $"Insert Into Sales (ProductName, Quantity, Price, SaleDate) Values('{ProductName}','{Quantity}','{Price}',now())";
            cmd.ExecuteNonQuery();

            Console.WriteLine("Sales Record Added");

            Console.Read();

        }

        private void SelectRecords(string SQLSelect)
        {

            cmd.CommandText = SQLSelect;
            MySqlDataReader Data = cmd.ExecuteReader();

            while (Data.Read())
            {

                Console.WriteLine(Data[0]);

            }

            Console.Read();

        }

        private void Reports()
        {

            Console.WriteLine("Please Enter Your Choice:");

            Console.WriteLine("1: List of Products Sold in a Specific Year");

            Console.WriteLine("2: List of Products Sold in a Specific Month of a Specific Year");

            Console.WriteLine("3: Total Sales in a Specific Year");

            Console.WriteLine("4: Total Sales in a Specific Month of a Specific Year");

            string Choice = Console.ReadLine();

            if (Choice == "1")
            {

                Console.WriteLine("Please Enter the Year in the Format YYYY:");
                string Year = Console.ReadLine();

                string SQLSelect = $"Select ProductName From Sales Where Substr(SaleDate,1,4)='{Year}'";

                SelectRecords(SQLSelect);


            }

            if (Choice == "2")
            {

                Console.WriteLine("Please Enter the Year in the Format YYYY:");
                string Year = Console.ReadLine();

                Console.WriteLine("Please Enter the Month in the Format MM:");
                string Month = Console.ReadLine();

                string SQLSelect = $"Select ProductName From Sales Where Substr(SaleDate,1,7)='{Year}-{Month}'";

                SelectRecords(SQLSelect);


            }

            if (Choice == "3")
            {

                Console.WriteLine("Please Enter the Year in the Format YYYY:");
                string Year = Console.ReadLine();

                string SQLSelect = $"Select Sum(Quantity*Price) From Sales Where Substr(SaleDate,1,4)='{Year}'";

                SelectRecords(SQLSelect);

            }

            if (Choice == "4")
            {

                Console.WriteLine("Please Enter the Year in the Format YYYY:");
                string Year = Console.ReadLine();

                Console.WriteLine("Please Enter the Month in the Format MM:");
                string Month = Console.ReadLine();

                string SQLSelect = $"Select Sum(Quantity*Price) From Sales Where Substr(SaleDate,1,7)='{Year}-{Month}'";

                SelectRecords(SQLSelect);

            }

            else
            {

                Console.WriteLine("Please Enter a Number Between 1 and 4 Inclusive");

            }

            Console.Read();

        }

    }

}