# WAP to check if a number is a multiple of 7 or not. 


number = int(input("Enter a number: "));

if((number%7) == 0):
    number = "Multiple of 7";
else:
    number = "Not mulitple of 7";

print(number);
