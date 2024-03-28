using System;
using System.Linq.Expressions;

namespace MyApp

{

    internal class Program
    {
        static void rectangleTower(int width, int height)
        {
            if (width == height || Math.Abs(width - height) > 5)
            {
                Console.WriteLine("the area is " + height * width + "\n");
            }
            else
            {
                Console.WriteLine("the perimeter is " + ((width * 2) + (height * 2)) + "\n");
            }
        }
        static void triangleTower(int width,int height)
        {
            string answer="0";
            while (answer != "1" && answer != "2") {
                Console.WriteLine("1 for triangle perimeter\n2 for printing the triangle");
                answer = Console.ReadLine();

            }
            if (answer == "1")
            {
                Console.WriteLine(width + Math.Sqrt(Math.Pow(width, 2) + 4 * Math.Pow(height, 2))+"\n");
            }
            else
            {
                if (width % 2 == 0 || width > height * 2) { Console.WriteLine("the triangle is unprintable\n"); }
                else
                {
                    //haa
                    int asterisks = 1;
                    int x = ((width - 3) / 2);//the number of jumps requiered
                    int blocks =( height - 2) / x;//the length of each block lines with the same ast count
                    int firstBlock =blocks + ((height - 2)%x);//the lenght of the first block is the middle height % the number of jumps+block
                    
                    for (int i = 0; i < height; i++)
                    {
                        //printing space
                        for (int j = 0; j < (width- asterisks)/2; j++)
                        {
                            Console.Write(" ");
                        }
                        //printing asterisks
                        for (int j = 0; j < asterisks; j++) {
                            Console.Write("*");
                        }
                        
                        if (i == 0 ||i== firstBlock || (i> firstBlock && (i-firstBlock)%blocks==0)) { asterisks += 2; };

                        Console.WriteLine("\n");
                    }

                }

            }
        }
        static void getWidthAndHeight(ref int width, ref int height)
        {
            Console.WriteLine("enter width");
            width = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter height");
            height = Convert.ToInt32(Console.ReadLine());

        }
        static void Main(string[] args)
        {
            string answer;
            int height=0,width=0;
            for (; ; )
            {
                Console.WriteLine("Please type your choice; \n1 to rectangle tower \n2 to tringe tower");
                answer = Console.ReadLine();
                switch (answer)
                {
                    case "1":
                        getWidthAndHeight(ref width, ref height);
                        rectangleTower(width, height);
                        break;
                    case "2":
                        getWidthAndHeight(ref width, ref height);
                        triangleTower(width, height);
                        break;
                    case "3":
                        return;
                    default:
                        Console.WriteLine("wrong input\n");
                        break;
                }
            }
        }
    }
}
