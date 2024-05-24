# # # # WAP to check if a list contains a palidrome of elements.(Hint:use copy()) method)

# # # [1, 2, 3, 2, 1]          [1, "abc", "abc", 1]
# ------------------------->
# <------------------------

# # Palidrome ---- same in both side reverse and start

# "ma'am"  "racecar"

# copy()-----Return a shallow copy of the list. 

list1 = [1, 2, 1];
#list1 = [1, 2, 3];
#list1 = ["m", "a", "a", "m", "p"];


copy_list1 = list1.copy();
copy_list1.reverse();

if(copy_list1 == list1):
    print("Palindrome");
else:
    print("NOT Palindrome");
