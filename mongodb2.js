db.Task38.insertMany( [
    {
        "id": 1,
        "name": "Tamilarasan",
        "Batch": "bw41",
        "month": "october",
        "Task": "Submitted",
         "Codekata": 200,
        "tasks": "react route,react context, react Crud",
        "topics": "Response Cycle, Array, Objects",
        "Attendance": "Present",
        "date": new Date("2022-10-11"),
        "mentors": {
            "name": "Vishnu sir",
            "count":20
        },
        "companydrive": {
              "company": "Amazon",
            "date": new Date("2022-10-13"),
        },
        "placement": {
            "Amazon":"tamilarasan",
            "zoho": "Hari",
            "TCS": "Rajesh",
            "CTC": "Pravin"
        }

    },
   
    {
        "id": 2,
        "name": "Hari",
        "Batch": "bw41",
        "month": "october",
        "Task": "Submitted",
        "Attendance": "Absent",
        "Codekata": 100,
        "tasks": "react route,react context, react Crud",
        "topics": "Response Cycle, Array, Objects",
        "date": new Date("2022-10-11"),
        "mentors": {
            "name": "thiru",
            "count": 15
        },
        "companydrive": {
        
            "company": "zoho",
            "date": new Date("2022-10-11"),
        },
        "placement": {
           "Amazon":"tamilarasan",
            "zoho": "Hari",
            "TCS": "Rajesh",
            "CTC": "Pravin"
        }

    },
     {
        "id": 3,
        "name": "rajesh",
        "Batch": "bw41",
        "month": "october",
        "Task": "Not Submitted",
        "Attendance": "Present",
        "Codekata": 190,
        "tasks": "react route,react context, react Crud",
        "topics": "Response Cycle, Array, Objects",
        "date": new Date("2022-10-18"),
        "mentors": {
            "name": "Sangeetha mam",
            "count": 20
        },
        "companydrive": {
                "company": "TCS",
            "date": new Date("2022-10-18"),
        },
        "placement": {
           "Amazon":"tamilarasan",
            "zoho": "Hari",
            "TCS": "Rajesh",
            "CTC": "Pravin"
        }

    },
    {
        "id": 4,
        "name": "pravin",
        "Batch": "bw41",
        "month": "June",
        "Task": "Submitted",
        "Attendance": "Present",
        "Codekata": 100,
        "tasks": "react route,react context, react Crud",
        "topics": "Response Cycle, Array, Objects",
        "date": new Date("2022-10-18"),
        "mentors": {
            "name": "Aravind sir",
            "count": 20
        },
        "companydrive": {
                "company": "TCS",
            "date": new Date("2022-10-18"),
        },
        "placement": {
           "Amazon":"tamilarasan",
            "zoho": "Hari",
            "TCS": "Rajesh",
            "CTC": "Pravin"
        }

    }
])


// 1. Find all the topics and tasks which are thought in the month of October

db.Task38.find({ month: { $eq: "october" } }, { _id: 0, tasks: 1, topics: 1 })

// 2. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.Task38.find({
    $and: [{ Task: { $eq: "Not Submitted" } },  { _id: 0, Task: 1, name: 1 },{ Attendance: { $eq: "Absent" } }, {
        date: {
            $gt: ISODate("2022-10-15"),
            $lt: ISODate("2022-10-31")
        }
    }]
}).count()

// 3. Find the number of problems solved by the user in codekata

db.Task38.find({}, { _id: 0, Codekata: 1, name: 1 })

// 4. Find all the mentors with who has the mentee's count more than 15

db.Task38.find({ "mentors.count": { $gt: 15 } }, { _id: 0, mentors: 1 })

//5.  Find all the company drives and students who are appeared for the placement

db.Task38.find({}, { _id: 0, companydrive: 1, placement: 1 })

// 6. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.Task38.find({
    "companydrive.date": {
        $gt: ISODate("2022-10-15"),
        $lt: ISODate("2022-10-31")
    }
}, { _id: 0, companydrive: 1 })