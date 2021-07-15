import sys
import csv
import json

# function to handle errors
def processError(errorMessage, output):
    with open(output, 'w') as f:
        json.dump({"error": errorMessage},f)
    quit()

# function to process students.csv, ensures no duplicate student ids
def processStudents(filename, output):
    students = {}
    with open(filename) as f:
        reader = csv.DictReader(f)
        for r in reader:
            if type(r["id"]) != int:
                processError("Invalid Student ID (not a number)", output)
            elif students[r["id"]] != None:
                processError("Duplicate Student ID", output)
            else:
                students[r["id"]] = r["name"]
    return students

#funciton to process courses.csv, ensures no duplicate course ids
def processCourses(filename, output):
    courses = {}
    with open(filename) as f:
        reader = csv.DictReader(f)
        for r in reader:
            if type(r["id"]) != int:
                processError("Invalid Course ID (not a number)", output)
            elif courses[r["id"]] != None:
                processError("Duplicate Course ID")
            else:
                courses[r["id"]] = [r["name"],r["teacher"]]
    return courses

#function to process tests, checks total weight of tests to be 100
def processTests(filename, output):
    courses = {}
    with open(filename) as f:
        reader = csv.DictReader(f)
        for r in reader:
            if type(r["id"]) != int:
                processError("Invalid test ID (not a number) in test.csv", output)
            elif type(r["course_id"]) != int:
                processError("Invalid course ID (not a number) in test.csv", output)
            elif isinstance(r["weight"], (int, float)) == False:
                processError("Weight of test is not numeric", output)
            elif courses[r["course_id"]] == None:
                courses[r["course_id"]] = {}
                courses[r["course_id"]]["weights"] = [].append((r["id"],r["weight"]))
                courses[r["course_id"]]["sum"] = r["weight"]
            else:
                courses[r["course_id"]]["weights"].append(r["id"], r["weight"])
                courses[r["course_id"]]["sum"] = courses[r["course_id"]]["sum"] + r["weight"]
    for key in courses:
        if courses[key]["sum"] != 100:
            processError("Sum of weights does not equal 100", output)
        else:
            courses[key].pop("sum")
    return courses

#function to process marks.csv
def processMarks(filename, studentMap,output):
    marks = {}

    return marks

if __name__ == '__main__':
    if len(sys.argv) != 6:
        print("Error: wrong number of arguments, must have 5 file names")
    sys.exit()

    #argument order
    # courses, students, tests, marks, output

    files = sys.argv[1:]

    #check that output file is a json file
    if files[4].endswith('.json') == False:
        print("Error: output file is not a json file")
        sys.exit()

    #check that previous files are csv files
    for i in range(len(files)-1):
        if files[i].endswith('csv') == False:
            processError("Invalid filename (needs to be CSV)", files[4])

    #begin reading files
    students = processStudents(files[1], files[4])
    courses = processCourses(files[0], files[4])
    tests = processTests(files[2], files[4])