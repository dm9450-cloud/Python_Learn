# WAP to find the greatest of 3 numbers entered by the user.

val1 = int(input("Enter first number: "));
val2 = int(input("Enter second number: "));
val3 = int(input("Enter third number: "));

if(val1 >= val2 and val1 >= val3):
    print("first number is largest",val1);
elif(val2 >= val1 and val2 >= val3):
    print("second number is largest",val2);
else:
    print("third number is largest",val3);
