## Video Upload and Display Backend
This repository contains the backend component of a Node.js application built with Express. It enables users to upload video files and retrieve a list of uploaded videos. Below, you'll find information on how to set up and use this backend.

## Features
Video Upload: Users can upload video files (e.g., .mp4, .avi, .mkv) up to 50MB in size.
Video Display: Users can retrieve a list of uploaded videos.
Prerequisites
Before running the backend server, ensure you have the following prerequisites installed:

Node.js and npm: You can download and install them from nodejs.org.
Installation
Clone the repository to your local machine:

```
Copy code
git clone https://github.com/urizennnn/HNG-chrome-extension-BE.git
Navigate to the project directory:
```


## Copy code
cd <project-directory>
Install the project dependencies:


npm install
Usage
Starting the Server
To start the server, run the following command:

npm start
The server will run by default at http://localhost:4000, but you can change the port in the server.js file.

## API Routes
GET /: A test route that returns a "Hello" message.
```
{
    "status":200,
    "message":"Hello"
}
```

## POST /api/HNG/uploadfile: Allows users to upload video files. Follow these steps:
### Request body
Set ```enctype``` to multipart/form-data and input name ```video```

## Response
### Success:
```
{
    "status": "Success",
    "message": "Video uploaded successfully"
}
```
### Failure:
```
{
    "status": "Failed",
    "message": "File upload failed",
    "message": "No video file uploaded",
    "message": "Please upload a video",
}
```

Navigate to Body -> form-data in your API client (e.g., Postman).
Set up your request body as follows:
Key: video
Value: Choose the video file using the "Choose File" option.
Hit send to upload the file.
Uploaded files must be videos, and their size must not exceed 50MB.

## GET /api/HNG/showvideos: Retrieves a list of uploaded videos and their URLs.
## Response
### Success:
```
{
    "status": "Success",
    "video": [list of available videoa]
}
```

## File Upload
When uploading a video file, make a POST request to /api/HNG/uploadfile with a form data field named video containing the video file.

## Viewing Uploaded Videos
To view the list of uploaded videos, make a GET request to /api/HNG/showvideos. This route will return a JSON response with URLs to the uploaded videos.

### Transcribe endpoint:
GET https://chrome-ext-server.onrender.com/transcribe/:filename
### Description: 
Generate transcript for the uploaded 

### Request body
https://chrome-ext-server.onrender.com/transcribe/Asynchronous JavaScript Tutorial 3  Status Codes.mp4

## Response
### Success:
```
{
    "status": "Success",
    "transcript": "1\n00:00:02,276 --> 00:00:04,273\nSo right now, we're checking this thing over\n\n2\n00:00:04,273 --> 00:00:06,590\nhere, request dot ready state is equal to\n\n3\n00:00:06,590 --> 00:00:08,915\nfour. And at that point, the request is\n\n4\n00:00:08,915 --> 00:00:11,303\ncomplete, and then we're logging the response text\n\n5\n00:00:11,303 --> 00:00:12,497\nto the console, and that's fine.\n\n6\n00:00:13,133 --> 00:00:15,362\nBut this check in itself to say, okay.\n\n7\n00:00:15,521 --> 00:00:16,715\nWell the request is complete.\n\n8\n00:00:17,368 --> 00:00:18,087\nThat's not enough.\n\n9\n00:00:18,885 --> 00:00:20,721\nBecause if there was some kind of error\n\n10\n00:00:20,721 --> 00:00:23,434\nwith the request. For example, if I create\n\n11\n00:00:23,434 --> 00:00:25,270\nsome kind of endpoint which is not valid,\n\n12\n00:00:25,764 --> 00:00:27,442\nIt still tries to make this request and\n\n13\n00:00:27,442 --> 00:00:29,520\nit still goes through the motions of going\n\n14\n00:00:29,520 --> 00:00:32,076\nthrough each phase or state, and it will\n\n15\n00:00:32,076 --> 00:00:33,275\nreach state four.\n\n16\n00:00:34,168 --> 00:00:35,920\nBut the difference is we're not gonna get\n\n17\n00:00:35,920 --> 00:00:38,172\nany kind of data back because this\n\n18\n00:00:38,946 --> 00:00:39,663\nis not correct.\n\n19\n00:00:40,380 --> 00:00:41,973\nThere will be some kind of error along\n\n20\n00:00:41,973 --> 00:00:42,371\nthe line.\n\n21\n00:00:42,942 --> 00:00:45,325\nAnd although it will reach stage four to\n\n22\n00:00:45,325 --> 00:00:47,548\nsay yet, the request is now complete, It\n\n23\n00:00:47,548 --> 00:00:49,136\nwill come back with some kind of error\n\n24\n00:00:49,136 --> 00:00:51,042\ncode to say there was a problem along\n\n25\n00:00:51,042 --> 00:00:51,939\nthe line somewhere\n\n26\n00:00:52,249 --> 00:00:54,724\nand obviously, we won't have access to the\n\n27\n00:00:54,724 --> 00:00:56,959\nresponse. So let me just demo this. I'm\n\n28\n00:00:56,959 --> 00:00:59,674\ngonna just log out the request object in\n\n29\n00:00:59,674 --> 00:01:01,510\nitself here as well as the response text.\n\n30\n00:01:02,082 --> 00:01:04,306\nAnd I've added this extra s to the\n\n31\n00:01:04,386 --> 00:01:07,326\nUrl the endpoint. So obviously, this doesn't exist\n\n32\n00:01:07,326 --> 00:01:09,050\nand we should see some kind of error\n\n33\n00:01:09,408 --> 00:01:11,243\nbut I'm gonna log out the request anyway\n\n34\n00:01:11,243 --> 00:01:13,237\nand try to log out the response text.\n\n35\n00:01:13,556 --> 00:01:15,071\nSo let me save this and come over\n\n36\n00:01:15,071 --> 00:01:15,230\nhere.\n\n37\n00:01:16,028 --> 00:01:17,145\nAnd now we can see first of all,\n\n38\n00:01:17,224 --> 00:01:18,795\nwe get this four zero four error\n\n39\n00:01:19,235 --> 00:01:21,634\nand we get this thing right here. This\n\n40\n00:01:21,634 --> 00:01:24,354\nis the request object. Notice we don't see\n\n41\n00:01:24,354 --> 00:01:26,755\nany response text. When we're logging this, we\n\n42\n00:01:26,755 --> 00:01:28,518\ndon't see over here because we're not getting\n\n43\n00:01:28,518 --> 00:01:30,106\nthat data anymore because there's an error.\n\n44\n00:01:30,900 --> 00:01:32,807\nNow if we open this up and we\n\n45\n00:01:32,807 --> 00:01:34,554\ncome down here, we can see the status\n\n46\n00:01:34,554 --> 00:01:37,285\nright here is four zero four, and the\n\n47\n00:01:37,285 --> 00:01:38,565\nresponse text is empty.\n\n48\n00:01:39,605 --> 00:01:41,765\nSo we're still reaching ready state four, and\n\n49\n00:01:41,765 --> 00:01:43,260\nwe're still firing this code\n\n50\n00:01:43,618 --> 00:01:45,692\nThat's not a problem. We're still getting there.\n\n51\n00:01:45,852 --> 00:01:47,527\nIt's just that there's been an error along\n\n52\n00:01:47,527 --> 00:01:49,680\nthe way, and now we're getting this bad\n\n53\n00:01:49,680 --> 00:01:52,791\nstatus, four zero four and also no response\n\n54\n00:01:52,791 --> 00:01:53,030\ntext.\n\n55\n00:01:54,162 --> 00:01:54,662\nSo\n\n56\n00:01:55,039 --> 00:01:56,975\nwhat we need to do to overcome this\n\n57\n00:01:57,033 --> 00:01:59,745\nis as well as checking the ready state,\n\n58\n00:02:00,144 --> 00:02:01,441\nalso check the status\n\n59\n00:02:01,898 --> 00:02:03,095\nwhen the request comes back.\n\n60\n00:02:04,148 --> 00:02:07,501\nSo if I correct this again to the\n\n61\n00:02:07,501 --> 00:02:10,375\ncorrect endpoint and save it. Notice now we\n\n62\n00:02:10,375 --> 00:02:12,711\nget the data and also up here\n\n63\n00:02:13,023 --> 00:02:15,328\nWe can see this object if we expand\n\n64\n00:02:15,328 --> 00:02:17,554\nthat, we get a status of two hundred.\n\n65\n00:02:18,110 --> 00:02:20,097\nWe're ready state four, we get the response\n\n66\n00:02:20,097 --> 00:02:20,470\ntext\n\n67\n00:02:20,909 --> 00:02:22,747\nand we have a status of two hundred.\n\n68\n00:02:23,147 --> 00:02:25,384\nNow a status of two hundred means that\n\n69\n00:02:25,384 --> 00:02:27,861\neverything was okay with the request, and it's\n\n70\n00:02:27,861 --> 00:02:29,220\ncome back with the data essentially.\n\n71\n00:02:30,112 --> 00:02:31,703\nNow, the four or four request that we\n\n72\n00:02:31,703 --> 00:02:34,885\njust saw means it cannot find the resource\n\n73\n00:02:34,885 --> 00:02:37,287\nthat we're trying to send it to. And\n\n74\n00:02:37,287 --> 00:02:39,118\nit can't find it because it didn't exist\n\n75\n00:02:39,118 --> 00:02:41,507\nwhen we added this s on, that resource\n\n76\n00:02:41,507 --> 00:02:44,135\nthis point, it didn't exist. So that's why\n\n77\n00:02:44,135 --> 00:02:46,219\nwe get a four zero four error. Sometimes\n\n78\n00:02:46,219 --> 00:02:47,968\nwhen you go to a web address up\n\n79\n00:02:47,968 --> 00:02:50,273\nhere that doesn't exist. You'll probably see some\n\n80\n00:02:50,273 --> 00:02:52,101\nkind of four zero four error in your\n\n81\n00:02:52,101 --> 00:02:53,849\nbrowser, that's the same kind of error.\n\n82\n00:02:54,898 --> 00:02:57,837\nNow there's loads of different types of status\n\n83\n00:02:57,837 --> 00:02:59,268\ncodes and you can get them all from\n\n84\n00:02:59,268 --> 00:03:01,572\na lot of different websites. This one, the\n\n85\n00:03:01,651 --> 00:03:03,002\nMo Md guide,\n\n86\n00:03:03,575 --> 00:03:05,095\nlists every single one as well.\n\n87\n00:03:05,895 --> 00:03:06,615\nSo typically,\n\n88\n00:03:07,015 --> 00:03:09,255\nwe get codes in the ranges of the\n\n89\n00:03:09,255 --> 00:03:12,135\none hundred, two hundred, three hundred, four hundred\n\n90\n00:03:12,135 --> 00:03:12,775\nand five hundred.\n\n91\n00:03:13,506 --> 00:03:15,576\nAnd in each range, it means something a\n\n92\n00:03:15,576 --> 00:03:18,123\nbit different. So all of the status codes\n\n93\n00:03:18,123 --> 00:03:20,670\nin the one hundred range, they are to\n\n94\n00:03:20,670 --> 00:03:22,501\ndo with information responses.\n\n95\n00:03:23,155 --> 00:03:25,955\nAnything to do with success responses. It's in\n\n96\n00:03:25,955 --> 00:03:27,635\nthe two hundred range. We can see two\n\n97\n00:03:27,635 --> 00:03:28,995\nhundred right here is okay.\n\n98\n00:03:29,715 --> 00:03:32,209\nAnd then the three hundred range is any\n\n99\n00:03:32,209 --> 00:03:33,410\nkind of redirection messages.\n\n100\n00:03:34,209 --> 00:03:37,090\nThe four hundred range is client error responses.\n\n101\n00:03:37,410 --> 00:03:38,849\nSo this is when there's an error in\n\n102\n00:03:38,849 --> 00:03:39,510\nthe browser\n\n103\n00:03:39,823 --> 00:03:42,840\nsuch as when we formatted something incorrectly in\n\n104\n00:03:42,840 --> 00:03:45,222\nthe code or if we use a wrong\n\n105\n00:03:45,222 --> 00:03:47,365\nendpoint, etcetera, this is the one we saw,\n\n106\n00:03:47,524 --> 00:03:48,556\nfour zero four not found,\n\n107\n00:03:49,208 --> 00:03:51,677\nAnd then five hundred is when there's a\n\n108\n00:03:51,677 --> 00:03:53,749\nserver error over here. So it's not our\n\n109\n00:03:53,749 --> 00:03:56,219\nfault. We've made the correct type of request,\n\n110\n00:03:56,378 --> 00:03:57,892\nbut there's some kind of error on the\n\n111\n00:03:57,892 --> 00:04:00,379\nserver which prevents us from getting the data.\n\n112\n00:04:01,416 --> 00:04:04,048\nSo there are different kinds of response codes,\n\n113\n00:04:04,287 --> 00:04:06,042\nwhat we want to do is to make\n\n114\n00:04:06,042 --> 00:04:08,275\nsure that we have this response status.\n\n115\n00:04:09,166 --> 00:04:10,999\nSo as well as checking for ready state\n\n116\n00:04:10,999 --> 00:04:13,229\nfour over here, we can also check for\n\n117\n00:04:13,229 --> 00:04:15,460\nthe status right here to be two hundred.\n\n118\n00:04:16,270 --> 00:04:18,578\nSo we've seen how to do logical and,\n\n119\n00:04:18,817 --> 00:04:21,147\ndouble amp ampersand, and we say request\n\n120\n00:04:21,602 --> 00:04:22,318\ndot status.\n\n121\n00:04:23,129 --> 00:04:26,073\nIs equal to two hundred. Now this is\n\n122\n00:04:26,073 --> 00:04:27,131\nonly gonna fire\n\n123\n00:04:27,745 --> 00:04:29,757\nwhen we get an okay response\n\n124\n00:04:30,212 --> 00:04:33,594\nand ready stay equal to four is So\n\n125\n00:04:33,653 --> 00:04:35,171\nlet me try this again. I'm gonna save\n\n126\n00:04:35,171 --> 00:04:37,568\nit and to notice now we don't log\n\n127\n00:04:37,568 --> 00:04:38,068\nout\n\n128\n00:04:38,446 --> 00:04:41,099\nthis thing right here. The request object because\n\n129\n00:04:41,099 --> 00:04:43,280\nthis now is not firing because the status\n\n130\n00:04:43,419 --> 00:04:45,099\nis not two hundred. We still get this\n\n131\n00:04:45,099 --> 00:04:46,539\nerror up here to say we've got a\n\n132\n00:04:46,539 --> 00:04:47,340\nfour zero four error.\n\n133\n00:04:47,913 --> 00:04:49,899\nBut we're not trying to do something now\n\n134\n00:04:49,899 --> 00:04:50,376\nover here.\n\n135\n00:04:51,091 --> 00:04:53,712\nWe're only doing this when we have a\n\n136\n00:04:53,712 --> 00:04:56,828\ncorrect endpoint. So if we save it, Now\n\n137\n00:04:56,828 --> 00:04:58,525\nwe can see all of this stuff here\n\n138\n00:04:58,584 --> 00:04:59,302\nand the object.\n\n139\n00:05:00,340 --> 00:05:02,894\nSo what we could do is attack on\n\n140\n00:05:02,894 --> 00:05:04,751\nan else clause and\n\n141\n00:05:05,144 --> 00:05:07,379\nIn fat will say else if, and then\n\n142\n00:05:07,379 --> 00:05:09,635\nin this if statement, we're still gonna check\n\n143\n00:05:09,853 --> 00:05:11,051\nthis thing over here,\n\n144\n00:05:12,727 --> 00:05:13,206\nlike so.\n\n145\n00:05:14,018 --> 00:05:16,245\nNow if this is the case, if the\n\n146\n00:05:16,245 --> 00:05:17,915\nready state is still equal to four,\n\n147\n00:05:18,631 --> 00:05:21,176\nbut obviously at this point, the status is\n\n148\n00:05:21,176 --> 00:05:23,971\nnot two hundred, so something's maybe not okay,\n\n149\n00:05:24,526 --> 00:05:26,430\nthen we can fire this code block over\n\n150\n00:05:26,430 --> 00:05:26,588\nhere.\n\n151\n00:05:27,302 --> 00:05:29,999\nSo the request is finished, but there's been\n\n152\n00:05:29,999 --> 00:05:31,921\nsome kind of problem along the way and\n\n153\n00:05:31,921 --> 00:05:34,307\nwe probably don't have any kind of response\n\n154\n00:05:34,307 --> 00:05:36,533\ntext. So what we could do here is\n\n155\n00:05:36,533 --> 00:05:39,180\nsay console dot log could not fetch\n\n156\n00:05:39,714 --> 00:05:40,191\nthe data.\n\n157\n00:05:41,323 --> 00:05:43,901\nOkay. So if we save that now and\n\n158\n00:05:43,960 --> 00:05:45,638\ntry something like adding an s on.\n\n159\n00:05:46,357 --> 00:05:47,635\nSave it and we can see now we\n\n160\n00:05:47,635 --> 00:05:49,810\nget this little error message in the console\n\n161\n00:05:49,810 --> 00:05:50,850\ncould not fetch the data.\n\n162\n00:05:51,730 --> 00:05:54,130\nSo now we have our Http request setup.\n\n163\n00:05:54,290 --> 00:05:56,070\nThe next step is to write a callback\n\n164\n00:05:56,130 --> 00:05:58,773\nfunction, which is gonna execute when this task\n\n165\n00:05:58,773 --> 00:06:00,833\nis complete, and we'll tie this back into\n\n166\n00:06:00,833 --> 00:06:02,814\nour understanding of asynchronous code.\n"
}
```
### Failure

```
{
    "status:"Failed",
    "message":`custom message`
}
```


### Technologies Used
Node.js
Express.js
http-status-codes
express-fileupload
fs.promises
Configuration
You can configure this server by modifying the environment variables in the .env file.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

### Author
# Akaaha Victor Chukwunweike