import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("exercisetracker");
function init() {
    db.transaction(t => {
        // t.executeSql('SELECT * FROM exercise;',undefined,(_,r)=>{
        // console.log("call back");    
        //     console.log(r.rows._array);
        // });
        t.executeSql('SELECT 1 FROM sqlite_master WHERE type = ? AND name = ?',
            ['table', 'exercise'],
            (_, r) => {
                // console.log(r.rows._array);
                if (r.rows.item(0) === undefined) {


                }
                else {
                    console.log("tables and data are already present");
                }
            });
    });

    createData();

}
function createData() {
    console.log("creating tables and inserting data");
    db.transaction(t => {
        t.executeSql(`CREATE TABLE IF NOT EXISTS exercise (
                            "name"	TEXT NOT NULL UNIQUE,
                            "description"	TEXT,
                            "imagesJson"	TEXT,
                            PRIMARY KEY("name")
                        );`, undefined, undefined, (_, r) => {
            console.log(r.message);
            return true;

        });
        t.executeSql(`CREATE TABLE IF NOT EXISTS major_muscle (
                            "name"	TEXT NOT NULL,
                            "notes"	TEXT,
                            "images_json"	TEXT,
                            PRIMARY KEY("name")
                        );`);

        t.executeSql(`CREATE TABLE IF NOT EXISTS "set_of_sets" (
                            "id"	INTEGER PRIMARY KEY AUTOINCREMENT,
                            exercise	BLOB NOT NULL,
                            "reps"	INTEGER NOT NULL CHECK(reps>0),
                            "percent_complete"	INTEGER NOT NULL DEFAULT 0 CHECK((percent_complete>=0 AND percent_complete<=100)),
                            "sets"	INTEGER CHECK(sets>0),
                            "duration_in_seconds"	INTEGER CHECK(duration_in_seconds>0),
                            "weight"	INTEGER,
                            "notes"	TEXT,
                            FOREIGN KEY(exercise) REFERENCES exercise("name")
                        );`);
        t.executeSql(`CREATE TABLE IF NOT EXISTS "exercise_major_muscle_one_to_many" (
                            "id"	INTEGER,
                            "exercise_name"	TEXT NOT NULL,
                            major_muscle	TEXT NOT NULL,
                            FOREIGN KEY("exercise_name") REFERENCES "exercise_major_muscle_one_to_many"("name"),
                            FOREIGN KEY(major_muscle) REFERENCES "major_muscle"("name"),
                            PRIMARY KEY("id")
                        );`);
                    

        t.executeSql("INSERT INTO major_muscle VALUES ('Chest','Also called Pectorals.',NULL);");
        t.executeSql("INSERT INTO major_muscle VALUES ('Lats','Latissimus dorsi muscle',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Trapezius','Upper Back',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Deltoids','Shoulders',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Biceps','Front of arms.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Triceps','Back of arms.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Forearm','',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Abdomen','',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Obliques','',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Lower Back','',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Hips','',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Gluts','Also called Buttocks.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Quadriceps','Front of thighs.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Hamstring','Back of thighs.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Adductors','Inside of thighs.',NULL)");
        t.executeSql("INSERT INTO major_muscle VALUES ('Calves','',NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Conventional Deadlift',NULL,NULL)", undefined, () => { console.log("this is working") },
            (_, r) => {
                console.log("tests");
                console.log(r.message);
                return true;
            }
        );
        t.executeSql("INSERT INTO exercise VALUES ('Romanian Deadlift',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Straight - legged Deadlift',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Sumo Deadlift',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Trap Bar Deadlift',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Back Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Front Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Box Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Sumo Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Overhead Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Split Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Smoth Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Bodyweight Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Jump Squat',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Flat Barbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Incline Barbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Decline Barbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Flat Dumbbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Incline Dumbbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Decline Dumbbell Bench Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Chest Fly',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Dips',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Pull - up',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Pull - down',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Chin - up',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Muscle - up',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Seated Row',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Face Pull',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Shoulder Shrug',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Upright Row',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Bent - over Row',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Bridge',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Front raise',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('lateral Raise',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Military Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Overhead Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Biceps Curl',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Wirst Curl',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Crunch',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Leg Raise',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Sit - Up',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Plank',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Good - morning',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Hyperextension',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Leg Press',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Lunge',NULL,NULL)");
        t.executeSql("INSERT INTO exercise VALUES ('Calf Raise',NULL,NULL)");
        
    });
    db.transaction(t=>{

        t.executeSql("INSERT INTO major_muscle VALUES ('Chest','Also called Pectorals.',NULL);");

    });
db.transaction(t=>{
t.executeSql(
            'SELECT * FROM major_muscle;'
            , undefined
            , (_, result) => {
                console.log("------");
                result.rows._array.forEach(e => console.log(e));
            }
        );


    });
}

function dropTables() {
    db.transaction(t => {
        console.log("Dropping tables");
        t.executeSql("DROP TABLE if exists exercise", undefined, (_, r) => console.log(r.rows._array));
        t.executeSql('DROP TABLE if exists major_muscles');
        t.executeSql('DROP TABLE if exists set_of_sets');
        t.executeSql('DROP TABLE if exists exercise_major_muscle_one_to_many');

    })
}

export { init, db, dropTables };//TODO: remove dropTables in production.