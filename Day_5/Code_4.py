# slicing -- Accessing parts of String. 

# str[ starting_idx : ending_idx ]    #ending idx(index) is not included

# str = "DipanshuMaddheshiya";
# str[ 1 : 4 ] is "ipa";
# str[ : 4] is same as str [ 0 : 4 ];
# str[ 1: ] is same as str [ 1 : len(str) ];

str = "Dipanshu Maddheshiya";
print(str[2:5]);
print(str[5:len(str)]);   #print(str[5:]);
print(str[:4]);
print(str[5:]);

# Negative Index

# A   P   P   L   E 
# -5 -4  -3  -2  -1

str = "Apple";
# str[-3:-1] is "pl"
print(str[-3:-1]);





