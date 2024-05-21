# String Functions

# str = "I am a coder.";

# str.endswith("er.")  #returns ture if string ends with substr
# str.capitalize()  #capitalizes 1st char
# str.replace(old,new)  #replaces all occurrences of old with new
# str.find(word)  #returns 1st index of 1st occurrence
# str.count("am")   #counts the occurrence of substr in string

str = "i am from studying python from youtube";
print(str.replace("python", "c++"));

print(str.find("a"));        #2  (it will print 1st index starting)
print(str.find("x"));        #-1

print(str.count("from"));       #2 it will count from there only 


str = str.capitalize();
print(str.endswith("ube"));      #True
print(str.endswith("er"));        #False

print(str.capitalize());
print(str);



