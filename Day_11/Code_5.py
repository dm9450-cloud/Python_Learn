# myDict.update(newDict)   #inserts the specified items to the dicitonary

student = {
    "name" : "Dipanshu Maddheshiya",
    "subjects" : {
        "phy" : 97,
        "chem" : 98,
        "math" : 95
    }
}

student.update({"city" : "delhi"});
print(student);


new_dict = {"city" : "delhi"}
student.update(new_dict)
print(student);


new_dict = {"city" : "delhi", "age" : 15}
student.update(new_dict)
print(student);



new_dict = {"name" : "Neha Sharma", "age" : 15}
student.update(new_dict)
print(student);