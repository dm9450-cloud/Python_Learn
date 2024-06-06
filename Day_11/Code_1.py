# #Dictionary Methods

# myDict.keys()  #returns all keys
# myDict.values()   #returns all values
# myDict.items()   #returna all(key, val) pairs as tuples
# myDict.get("key")  #return the key according to value
# myDict.update(newDict)  #inserts the specified items to the dictionary


student = {
    "name" : "Dipanshu Maddheshiya",
    "subjects" : {
        "phy" : 97,
        "chem" : 98,
        "math" : 95
    }
}

print(student.keys());   # dict_keys(['name', 'subjects'])
print(list(student.keys()));  # ['name', 'subjects']
print(len(student));    # 2
print(len(student.keys()));   # 2