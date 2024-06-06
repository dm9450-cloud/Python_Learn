# myDict.items()   # returns all (key, val) pairs as tuples
student = {
    "name" : "Dipanshu Maddheshiya",
    "subjects" : {
        "phy" : 97,
        "chem" : 98,
        "math" : 95
    }
}

pairs = list(student.items());
print(pairs[0]);   #('name', 'Dipanshu Maddheshiya')
print(pairs[1]);    #('subjects', {'phy': 97, 'chem': 98, 'math': 95})
print(pairs[2]);




print(student.items());  #dict_items([('name', 'Dipanshu Maddheshiya'), ('subjects', {'phy': 97, 'chem': 98, 'math': 95})])

print(list(student.items()));   #[('name', 'Dipanshu Maddheshiya'), ('subjects', {'phy': 97, 'chem': 98, 'math': 95})]




