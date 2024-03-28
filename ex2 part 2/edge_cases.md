### Edge Case Document
the following segment has been standardized and spell-checked by ChatGPT. The original document is provided after this segment.

#### User Module

1. **Empty Form Submission**
   - **Objective**: Ensure all form fields are filled out before submission.
   - **Test Case**: Submit the form with one or more fields left empty.
   - **Expected Outcome**: System should display appropriate error messages and prevent form submission until all fields are filled.

2. **Exposure Date Validation**
   - **Objective**: Validate exposure date against specified criteria.
   - **Test Case**: Submit a form with an exposure date:
     - In the future.
     - Before the occurrence of COVID-19.
     - After the recovery date.
   - **Expected Outcome**: System should reject submissions with exposure dates that violate the criteria.

3. **Recovery Date Validation**
   - **Objective**: Validate recovery date against specified criteria.
   - **Test Case**: Submit a form with a recovery date:
     - In the future.
     - Before the exposure date.
   - **Expected Outcome**: System should reject submissions with recovery dates that violate the criteria.

4. **Date Format and Range Validation**
   - **Objective**: Ensure dates are in correct format and range.
   - **Test Case**: Submit forms with dates in incorrect formats or out of range (e.g., month > 12).
   - **Expected Outcome**: System should reject submissions with incorrectly formatted or out-of-range dates.

5. **Isolated People String Validation**
   - **Objective**: Validate the structure and content of the isolated people string.
   - **Test Case**: Submit forms with invalid or empty isolated people strings.
   - **Expected Outcome**: System should handle invalid strings appropriately and provide relevant error messages.

6. **Duplicate Isolation Event Check**
   - **Objective**: Prevent creation of duplicate isolation events.
   - **Test Case**: Submit a form with isolation event data identical to an existing event.
   - **Expected Outcome**: System should detect duplicate events and prevent their creation.

7. **Datumpoints Location Validation**
   - **Objective**: Validate datumpoints against existing locations and valid range.
   - **Test Case**: Submit forms with datumpoints in invalid locations or outside valid range.
   - **Expected Outcome**: System should reject submissions with invalid datumpoints and provide relevant feedback.

8. **Member Isolation Check**
   - **Objective**: Prevent overlapping isolation events for the same member.
   - **Test Case**: Submit forms where a member is already in isolation during the proposed period.
   - **Expected Outcome**: System should handle overlapping isolation events appropriately and prevent duplicate alerts.

9. **Virus Location and Duration Check**
   - **Objective**: Optimize isolation notifications by considering overlapping virus locations and durations.
   - **Test Case**: Submit forms where multiple virus instances overlap in location and time.
   - **Expected Outcome**: System should intelligently handle overlapping virus instances to minimize unnecessary notifications.

10. **Theoretical Isolation Event Handling**
    - **Objective**: Avoid redundant notifications for past isolation events.
    - **Test Case**: Submit forms for past dates with theoretical isolation events.
    - **Expected Outcome**: System should not send notifications for isolation events that have already occurred.

11. **Datumpoint Israel Territory Check**
    - **Objective**: Ensure datumpoints are within the range of Israel territory.
    - **Test Case**: Submit forms with datumpoints outside Israel's geographic boundaries.
    - **Expected Outcome**: System should reject submissions with datumpoints outside the valid territory range.

By addressing these edge cases, the system can ensure robustness and reliability in handling various user interactions and scenarios.

By addressing these edge cases, the system can ensure robustness and reliability in handling various user interactions and scenarios.







1. empty form submission - make sure every field is full
2. exposuredate field sould be in the past (also not befor the corona), and before the recovery date
3. recoverydate should be in the past and after the esposury date
4. in general the dates should be in correct format and range (1-12 in the month field ect)
5. the isolatedpeople string contains valid id's(shoter then 9 digits negetive numver ect). or if it is empty.
6. case when isolation event with the same data was already sent to the server
7. datumpoints are an existing location in a valid range
8. if one of the members in the isolatedpeople string is already in an isolation in the range of the new isolation event that end after the new isolation. for example:
x was exposed to the viruos on 01/01/23 and on 05/01/23
on 06/01/23 isoltion event for 05/01/23 was created. so now he will be at home till 15/01/23 (10 days isolation)
on 07/01/23 isolation event for 01/01/23 was create. which means he will get isolation till 10/01/23 but it is meanningless becuase he is already isolated for those days, so he shouldnt get an alert.
9. case there was a virus in the same location of a virus for the same period time or for a shorter time. for example:
virus x was in location (7,9) from 01/01/23 till 10/01/23
everyone who needs isolation was informed.
virus y was in location (7,9) from 02/01/23 till 09/01/23
the system should create a condition to check it to spare anymore iteration of the isolated people string
10. If we assume that the system creates theoretical isolation events (for past dates, which do not require notifications to individuals, we will pay attention that it wouldnt send notifications about isolation events that have already occurred). for example it woudnt send a isolation alert to someone with 01/01/23-10/01/23 if the current date is 11/01/23
11. is the  datumpoint in the range of israel teritory 


