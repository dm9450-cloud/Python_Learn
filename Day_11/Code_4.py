# MyDict.get("key")   # returns the key according to value

student = {
    "name" : "Dipanshu Maddheshiya",
    "subjects" : {
        "phy" : 97,
        "chem" : 98,
        "math" : 95
    }
}

print(student["name"]);           #Dipanshu Maddheshiya
print(student.get("name"));          #Dipanshu Maddheshiya

print(student["name2"]);           #error
print(student.get("name2"));     #no error----->None
