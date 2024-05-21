# Grade students based on marks

# marks >= 90, grade = "A"
# 90 > marks >= 80 , grade = "B"
# 80 > marks >= 70, grade = "C"
# 70 > marks, grade = "D"

marks = int(input("Enter your marks : "));

if (marks >= 90):
    grade = "A";
elif(marks >=80 and marks < 90):
    grade = "B";
elif(marks >= 70 and marks < 80):
    grade = "C";
else:
    grade = "D";
print("Grade of the student : ", grade);

