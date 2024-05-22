# List Slicing
# Similar to string slicing 

# list_name[startin_idx : ending_idx]    #ending idx is not included

# marks = [87, 64, 33, 95, 76];
# marks[1:4] is [64, 33, 95];
# marks[ :4] is same as marks [0:4];
# marks[1: ] is same as marks [1:len(marks)];
# marks[-3:-1] is [33,95]

marks = [85, 94, 76, 63, 48];

print(marks[1:4]);
print(marks[1:]);
print(marks[-3:-1]);
