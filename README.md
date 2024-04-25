# Test Portal Frontend Project
## [Test Deployment](https://saran-surya.github.io/test-portal-frontend/)
* The test deployment works on the basis of 6 questions and a total time of 20 mins

<hr/>

This is a test portal that work on the basis of input from a JSON file
|- Questions.json
 * Contains the schema for writing the questions as follows
 * Schema (***For every question in the test***)
   ```json
   {
    "<Question Number : 1 based>" : {
        "Question" : "String",
        "Choices" : {
            "1" : {
                "Text" : "Solution 1",
                "Score" : "1"
            },
            "2" : {
                "Text" : "Solution 2",
                "Score" : "0"
            },
            "3" : {
                "Text" : "Solution 3",
                "Score" : "1"
            },
            "4" : {
                "Text" : "Solution 4",
                "Score" : "0"
            }
        }  
    },
   }
   ```
|- config.json
  * Schema (***Total time for the complete test***)
  ```json
  {
      "time-in-mins": 20
  }
  ```

## Ground Rules and Pre-Requisites
* Always set the screen aspect ratio to 100%
* Do-Not refresh your browser in between the test (as you will loose data)

## Project Images
![image](https://github.com/saran-surya/test-portal/assets/59312489/477fc057-43f3-4a18-a255-39707d54d6f2)
![image](https://github.com/saran-surya/test-portal/assets/59312489/3a2de596-f3f9-45f7-a305-b54b5816dc4e)
![image](https://github.com/saran-surya/test-portal/assets/59312489/ce54c3d4-890d-4c54-8424-aaf6b438f7bd)





