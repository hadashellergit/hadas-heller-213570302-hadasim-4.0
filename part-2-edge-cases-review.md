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


