{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red111\green143\blue180;\red255\green255\blue255;\red80\green91\blue117;
\red119\green179\blue197;\red147\green179\blue121;\red164\green121\blue157;}
{\*\expandedcolortbl;;\cssrgb\c50588\c63137\c75686;\cssrgb\c100000\c100000\c100000;\cssrgb\c38824\c43529\c53333;
\cssrgb\c53333\c75294\c81569;\cssrgb\c63922\c74510\c54902;\cssrgb\c70588\c55686\c67843;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs25\fsmilli12573 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 let\cf3 \strokec3  projects \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 [];\cf3 \strokec3  \cf4 \strokec4 // Lista \'f6ver projekt\cf3 \strokec3 \
\cf2 \strokec2 let\cf3 \strokec3  employees \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 [];\cf3 \strokec3  \cf4 \strokec4 // Lista \'f6ver anst\'e4llda\cf3 \strokec3 \
\cf2 \strokec2 let\cf3 \strokec3  selectedProject \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 null;\cf3 \strokec3  \cf4 \strokec4 // Aktuellt valt projekt\cf3 \strokec3 \
\cf2 \strokec2 let\cf3 \strokec3  selectedJob \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 null;\cf3 \strokec3  \cf4 \strokec4 // Aktuellt valt jobb\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Visa projekt\'f6versikten som standard\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf5 \strokec5 showProjectOverview\cf2 \strokec2 ();\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att visa projekt\'f6versikten\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 showProjectOverview\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectOverview"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobListPage"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "addProjectForm"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "adminPanel"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "addJobForm"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobDetails"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf5 \strokec5 loadProjects\cf2 \strokec2 ();\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att ladda projekt\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 loadProjects\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectList"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 =\cf3 \strokec3  projects\cf2 \strokec2 .\cf5 \strokec5 map\cf2 \strokec2 ((\cf3 \strokec3 project\cf2 \strokec2 ,\cf3 \strokec3  index\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 =>\cf3 \strokec3  \
        \cf6 \strokec6 `<li>\
            <strong>\cf2 \strokec2 $\{\cf3 \strokec3 project\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 \}\cf6 \strokec6 </strong> (\cf2 \strokec2 $\{\cf3 \strokec3 project\cf2 \strokec2 .\cf3 \strokec3 address\cf2 \strokec2 \}\cf6 \strokec6 )\
            <button onclick="viewProject(\cf2 \strokec2 $\{\cf3 \strokec3 index\cf2 \strokec2 \}\cf6 \strokec6 )">\uc0\u55357 \u56589  Visa jobb</button>\
            <button onclick="downloadProjectPDF(\cf2 \strokec2 $\{\cf3 \strokec3 index\cf2 \strokec2 \}\cf6 \strokec6 )">\uc0\u55357 \u56516  Ladda ner projekt</button>\
        </li>`\cf3 \strokec3 \
    \cf2 \strokec2 ).\cf5 \strokec5 join\cf2 \strokec2 (\cf6 \strokec6 ""\cf2 \strokec2 );\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att visa jobblista f\'f6r ett specifikt projekt\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 viewProject\cf2 \strokec2 (\cf3 \strokec3 index\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    selectedProject \cf2 \strokec2 =\cf3 \strokec3  projects\cf2 \strokec2 [\cf3 \strokec3 index\cf2 \strokec2 ];\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedProject\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 return;\cf3 \strokec3 \
\
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectName"\cf2 \strokec2 ).\cf3 \strokec3 innerText \cf2 \strokec2 =\cf3 \strokec3  selectedProject\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobListPage"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectOverview"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf5 \strokec5 loadJobs\cf2 \strokec2 ();\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att ladda jobb f\'f6r det valda projektet\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 loadJobs\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedProject\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 return;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobList"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 =\cf3 \strokec3  selectedProject\cf2 \strokec2 .\cf3 \strokec3 jobs\cf2 \strokec2 .\cf5 \strokec5 map\cf2 \strokec2 ((\cf3 \strokec3 job\cf2 \strokec2 ,\cf3 \strokec3  index\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 =>\cf3 \strokec3  \
        \cf6 \strokec6 `<li>\
            <strong>\cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 apartment\cf2 \strokec2 \}\cf6 \strokec6 </strong>: \cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 comment\cf2 \strokec2 \}\cf6 \strokec6 \
            <span class="status \cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 status \cf2 \strokec2 ||\cf3 \strokec3  \cf6 \strokec6 'Ingen status'\cf2 \strokec2 \}\cf6 \strokec6 ">\cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 status \cf2 \strokec2 ||\cf3 \strokec3  \cf6 \strokec6 'Ingen status'\cf2 \strokec2 \}\cf6 \strokec6 </span>\
            <button onclick="viewJob(\cf2 \strokec2 $\{\cf3 \strokec3 index\cf2 \strokec2 \}\cf6 \strokec6 )">\uc0\u55357 \u56589  Visa detaljer</button>\
        </li>`\cf3 \strokec3 \
    \cf2 \strokec2 ).\cf5 \strokec5 join\cf2 \strokec2 (\cf6 \strokec6 ""\cf2 \strokec2 );\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att visa jobbdetaljer\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 viewJob\cf2 \strokec2 (\cf3 \strokec3 index\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    selectedJob \cf2 \strokec2 =\cf3 \strokec3  selectedProject\cf2 \strokec2 .\cf3 \strokec3 jobs\cf2 \strokec2 [\cf3 \strokec3 index\cf2 \strokec2 ];\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedJob\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 return;\cf3 \strokec3 \
\
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "apartmentNumber"\cf2 \strokec2 ).\cf3 \strokec3 innerText \cf2 \strokec2 =\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 apartment\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "currentStatus"\cf2 \strokec2 ).\cf3 \strokec3 innerText \cf2 \strokec2 =\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 status \cf2 \strokec2 ||\cf3 \strokec3  \cf6 \strokec6 'Ingen status'\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "currentStatus"\cf2 \strokec2 ).\cf3 \strokec3 className \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 `status \cf2 \strokec2 $\{\cf3 \strokec3 selectedJob\cf2 \strokec2 .\cf3 \strokec3 status \cf2 \strokec2 ||\cf3 \strokec3  \cf6 \strokec6 'Ingen status'\cf2 \strokec2 \}\cf6 \strokec6 `\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobComment"\cf2 \strokec2 ).\cf3 \strokec3 innerText \cf2 \strokec2 =\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 comment\cf2 \strokec2 ;\cf3 \strokec3 \
\
    \cf4 \strokec4 // Visa kommentarer\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "commentsSection"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 =\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 comments\cf2 \strokec2 .\cf5 \strokec5 map\cf2 \strokec2 (\cf3 \strokec3 c \cf2 \strokec2 =>\cf3 \strokec3  \cf6 \strokec6 `<p>- \cf2 \strokec2 $\{\cf3 \strokec3 c\cf2 \strokec2 \}\cf6 \strokec6 </p>`\cf2 \strokec2 ).\cf5 \strokec5 join\cf2 \strokec2 (\cf6 \strokec6 ""\cf2 \strokec2 );\cf3 \strokec3 \
\
    \cf4 \strokec4 // Visa bifogade filer\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "filePreview"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 =\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 files \cf2 \strokec2 ?\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 files\cf2 \strokec2 .\cf5 \strokec5 map\cf2 \strokec2 (\cf3 \strokec3 file \cf2 \strokec2 =>\cf3 \strokec3  \cf6 \strokec6 `<p>\uc0\u55357 \u56516  \cf2 \strokec2 $\{\cf3 \strokec3 file\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 \}\cf6 \strokec6 </p>`\cf2 \strokec2 ).\cf5 \strokec5 join\cf2 \strokec2 (\cf6 \strokec6 ""\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 :\cf3 \strokec3  \cf6 \strokec6 ""\cf2 \strokec2 ;\cf3 \strokec3 \
\
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobDetails"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobListPage"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att l\'e4gga till kommentar\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 addComment\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedJob\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 return;\cf3 \strokec3 \
    \cf2 \strokec2 let\cf3 \strokec3  newComment \cf2 \strokec2 =\cf3 \strokec3  document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "newComment"\cf2 \strokec2 ).\cf3 \strokec3 value\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (\cf3 \strokec3 newComment\cf2 \strokec2 .\cf5 \strokec5 trim\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 !==\cf3 \strokec3  \cf6 \strokec6 ""\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
        \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedJob\cf2 \strokec2 .\cf3 \strokec3 comments\cf2 \strokec2 )\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 comments \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 [];\cf3 \strokec3 \
        selectedJob\cf2 \strokec2 .\cf3 \strokec3 comments\cf2 \strokec2 .\cf5 \strokec5 push\cf2 \strokec2 (\cf3 \strokec3 newComment\cf2 \strokec2 );\cf3 \strokec3 \
        document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "commentsSection"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 +=\cf3 \strokec3  \cf6 \strokec6 `<p>- \cf2 \strokec2 $\{\cf3 \strokec3 newComment\cf2 \strokec2 \}\cf6 \strokec6 </p>`\cf2 \strokec2 ;\cf3 \strokec3 \
        document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "newComment"\cf2 \strokec2 ).\cf3 \strokec3 value \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 ""\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf2 \strokec2 \}\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att bifoga fil till jobb\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 handleFileUploadJob\cf2 \strokec2 (\cf3 \strokec3 event\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedJob\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 return;\cf3 \strokec3 \
    \cf2 \strokec2 let\cf3 \strokec3  file \cf2 \strokec2 =\cf3 \strokec3  event\cf2 \strokec2 .\cf3 \strokec3 target\cf2 \strokec2 .\cf3 \strokec3 files\cf2 \strokec2 [\cf7 \strokec7 0\cf2 \strokec2 ];\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (\cf3 \strokec3 file\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
        \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (!\cf3 \strokec3 selectedJob\cf2 \strokec2 .\cf3 \strokec3 files\cf2 \strokec2 )\cf3 \strokec3  selectedJob\cf2 \strokec2 .\cf3 \strokec3 files \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 [];\cf3 \strokec3 \
        selectedJob\cf2 \strokec2 .\cf3 \strokec3 files\cf2 \strokec2 .\cf5 \strokec5 push\cf2 \strokec2 (\cf3 \strokec3 file\cf2 \strokec2 );\cf3 \strokec3 \
        document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "filePreview"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 +=\cf3 \strokec3  \cf6 \strokec6 `<p>\uc0\u55357 \u56516  \cf2 \strokec2 $\{\cf3 \strokec3 file\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 \}\cf6 \strokec6 </p>`\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf2 \strokec2 \}\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att g\'e5 tillbaka till jobblistan\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 goBackToJobList\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobDetails"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "jobListPage"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att g\'e5 tillbaka till projekt\'f6versikten\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 goBackToProjects\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf5 \strokec5 showProjectOverview\cf2 \strokec2 ();\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att \'f6ppna admininst\'e4llningar\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 openAdmin\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "adminPanel"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectOverview"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf5 \strokec5 loadEmployees\cf2 \strokec2 ();\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 closeAdmin\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "adminPanel"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "none"\cf2 \strokec2 ;\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "projectOverview"\cf2 \strokec2 ).\cf3 \strokec3 style\cf2 \strokec2 .\cf3 \strokec3 display \cf2 \strokec2 =\cf3 \strokec3  \cf6 \strokec6 "block"\cf2 \strokec2 ;\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att l\'e4gga till anst\'e4llda\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 addEmployee\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 let\cf3 \strokec3  name \cf2 \strokec2 =\cf3 \strokec3  document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "newEmployee"\cf2 \strokec2 ).\cf3 \strokec3 value\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (\cf3 \strokec3 name\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3  employees\cf2 \strokec2 .\cf5 \strokec5 push\cf2 \strokec2 (\cf3 \strokec3 name\cf2 \strokec2 );\cf3 \strokec3  \cf5 \strokec5 loadEmployees\cf2 \strokec2 ();\cf3 \strokec3  \cf2 \strokec2 \}\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 loadEmployees\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    document\cf2 \strokec2 .\cf5 \strokec5 getElementById\cf2 \strokec2 (\cf6 \strokec6 "employeeList"\cf2 \strokec2 ).\cf3 \strokec3 innerHTML \cf2 \strokec2 =\cf3 \strokec3  employees\cf2 \strokec2 .\cf5 \strokec5 map\cf2 \strokec2 (\cf3 \strokec3 e \cf2 \strokec2 =>\cf3 \strokec3  \cf6 \strokec6 `<li>\cf2 \strokec2 $\{\cf3 \strokec3 e\cf2 \strokec2 \}\cf6 \strokec6 </li>`\cf2 \strokec2 ).\cf5 \strokec5 join\cf2 \strokec2 (\cf6 \strokec6 ""\cf2 \strokec2 );\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att logga ut\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 logout\cf2 \strokec2 ()\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf5 \strokec5 alert\cf2 \strokec2 (\cf6 \strokec6 "Utloggad!"\cf2 \strokec2 );\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att ladda ner hela projektet som PDF\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 downloadProjectPDF\cf2 \strokec2 (\cf3 \strokec3 projectIndex\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 const\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3  jsPDF \cf2 \strokec2 \}\cf3 \strokec3  \cf2 \strokec2 =\cf3 \strokec3  window\cf2 \strokec2 .\cf3 \strokec3 jspdf\cf2 \strokec2 ;\cf3 \strokec3 \
    \cf2 \strokec2 const\cf3 \strokec3  doc \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 new\cf3 \strokec3  \cf5 \strokec5 jsPDF\cf2 \strokec2 ();\cf3 \strokec3 \
\
    \cf2 \strokec2 const\cf3 \strokec3  project \cf2 \strokec2 =\cf3 \strokec3  projects\cf2 \strokec2 [\cf3 \strokec3 projectIndex\cf2 \strokec2 ];\cf3 \strokec3 \
    doc\cf2 \strokec2 .\cf5 \strokec5 text\cf2 \strokec2 (\cf6 \strokec6 `Projekt: \cf2 \strokec2 $\{\cf3 \strokec3 project\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 \}\cf6 \strokec6 `\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 );\cf3 \strokec3 \
    doc\cf2 \strokec2 .\cf5 \strokec5 text\cf2 \strokec2 (\cf6 \strokec6 `Adress: \cf2 \strokec2 $\{\cf3 \strokec3 project\cf2 \strokec2 .\cf3 \strokec3 address\cf2 \strokec2 \}\cf6 \strokec6 `\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 20\cf2 \strokec2 );\cf3 \strokec3 \
    doc\cf2 \strokec2 .\cf5 \strokec5 text\cf2 \strokec2 (\cf6 \strokec6 "Jobblista:"\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 30\cf2 \strokec2 );\cf3 \strokec3 \
\
    project\cf2 \strokec2 .\cf3 \strokec3 jobs\cf2 \strokec2 .\cf5 \strokec5 forEach\cf2 \strokec2 ((\cf3 \strokec3 job\cf2 \strokec2 ,\cf3 \strokec3  index\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 =>\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
        doc\cf2 \strokec2 .\cf5 \strokec5 text\cf2 \strokec2 (\cf6 \strokec6 `\cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 apartment\cf2 \strokec2 \}\cf6 \strokec6 : \cf2 \strokec2 $\{\cf3 \strokec3 job\cf2 \strokec2 .\cf3 \strokec3 comment\cf2 \strokec2 \}\cf6 \strokec6 `\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 ,\cf3 \strokec3  \cf7 \strokec7 40\cf3 \strokec3  \cf2 \strokec2 +\cf3 \strokec3  \cf2 \strokec2 (\cf3 \strokec3 index \cf2 \strokec2 *\cf3 \strokec3  \cf7 \strokec7 10\cf2 \strokec2 ));\cf3 \strokec3 \
    \cf2 \strokec2 \});\cf3 \strokec3 \
\
    doc\cf2 \strokec2 .\cf5 \strokec5 save\cf2 \strokec2 (\cf6 \strokec6 `\cf2 \strokec2 $\{\cf3 \strokec3 project\cf2 \strokec2 .\cf3 \strokec3 name\cf2 \strokec2 \}\cf6 \strokec6 .pdf`\cf2 \strokec2 );\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 // Funktion f\'f6r att hantera filuppladdning (Excel)\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf3 \strokec3  \cf5 \strokec5 handleFileUpload\cf2 \strokec2 (\cf3 \strokec3 event\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
    \cf2 \strokec2 const\cf3 \strokec3  file \cf2 \strokec2 =\cf3 \strokec3  event\cf2 \strokec2 .\cf3 \strokec3 target\cf2 \strokec2 .\cf3 \strokec3 files\cf2 \strokec2 [\cf7 \strokec7 0\cf2 \strokec2 ];\cf3 \strokec3 \
    \cf2 \strokec2 if\cf3 \strokec3  \cf2 \strokec2 (\cf3 \strokec3 file\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
        \cf2 \strokec2 const\cf3 \strokec3  reader \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 new\cf3 \strokec3  \cf5 \strokec5 FileReader\cf2 \strokec2 ();\cf3 \strokec3 \
        reader\cf2 \strokec2 .\cf5 \strokec5 onload\cf3 \strokec3  \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 function(\cf3 \strokec3 e\cf2 \strokec2 )\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
            \cf2 \strokec2 const\cf3 \strokec3  data \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 new\cf3 \strokec3  \cf5 \strokec5 Uint8Array\cf2 \strokec2 (\cf3 \strokec3 e\cf2 \strokec2 .\cf3 \strokec3 target\cf2 \strokec2 .\cf3 \strokec3 result\cf2 \strokec2 );\cf3 \strokec3 \
            \cf2 \strokec2 const\cf3 \strokec3  workbook \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 XLSX.\cf5 \strokec5 read\cf2 \strokec2 (\cf3 \strokec3 data\cf2 \strokec2 ,\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3  \cf2 \strokec2 type:\cf3 \strokec3  \cf6 \strokec6 'array'\cf3 \strokec3  \cf2 \strokec2 \});\cf3 \strokec3 \
            \cf2 \strokec2 const\cf3 \strokec3  sheetName \cf2 \strokec2 =\cf3 \strokec3  workbook\cf2 \strokec2 .\cf3 \strokec3 SheetNames\cf2 \strokec2 [\cf7 \strokec7 0\cf2 \strokec2 ];\cf3 \strokec3 \
            \cf2 \strokec2 const\cf3 \strokec3  worksheet \cf2 \strokec2 =\cf3 \strokec3  workbook\cf2 \strokec2 .\cf3 \strokec3 Sheets\cf2 \strokec2 [\cf3 \strokec3 sheetName\cf2 \strokec2 ];\cf3 \strokec3 \
            \cf2 \strokec2 const\cf3 \strokec3  json \cf2 \strokec2 =\cf3 \strokec3  \cf2 \strokec2 XLSX.\cf3 \strokec3 utils\cf2 \strokec2 .\cf5 \strokec5 sheet_to_json\cf2 \strokec2 (\cf3 \strokec3 worksheet\cf2 \strokec2 );\cf3 \strokec3 \
\
            json\cf2 \strokec2 .\cf5 \strokec5 forEach\cf2 \strokec2 (\cf3 \strokec3 row \cf2 \strokec2 =>\cf3 \strokec3  \cf2 \strokec2 \{\cf3 \strokec3 \
                selectedProject\cf2 \strokec2 .\cf3 \strokec3 jobs\cf2 \strokec2 .\cf5 \strokec5 push\cf2 \strokec2 (\{\cf3 \strokec3 \
                    \cf2 \strokec2 apartment:\cf3 \strokec3  row\cf2 \strokec2 .L\cf3 \strokec3 \'e4genhetsnummer\cf2 \strokec2 ,\cf3 \strokec3 \
                    \cf2 \strokec2 comment:\cf3 \strokec3  row\cf2 \strokec2 .\cf3 \strokec3 Beskrivning\cf2 \strokec2 ,\cf3 \strokec3 \
                    \cf2 \strokec2 status:\cf3 \strokec3  row\cf2 \strokec2 .\cf3 \strokec3 Status \cf2 \strokec2 ||\cf3 \strokec3  \cf2 \strokec2 null,\cf3 \strokec3 \
                    \cf2 \strokec2 comments:\cf3 \strokec3  \cf2 \strokec2 [],\cf3 \strokec3 \
                    \cf2 \strokec2 images:\cf3 \strokec3  \cf2 \strokec2 [],\cf3 \strokec3 \
                    \cf2 \strokec2 bomTime:\cf3 \strokec3  \cf2 \strokec2 null\cf3 \strokec3 \
                \cf2 \strokec2 \});\cf3 \strokec3 \
            \cf2 \strokec2 \});\cf3 \strokec3 \
\
            \cf5 \strokec5 loadJobs\cf2 \strokec2 ();\cf3 \strokec3 \
            \cf5 \strokec5 alert\cf2 \strokec2 (\cf6 \strokec6 "Filen har laddats upp och jobben har lagts till!"\cf2 \strokec2 );\cf3 \strokec3 \
        \cf2 \strokec2 \};\cf3 \strokec3 \
        reader\cf2 \strokec2 .\cf5 \strokec5 readAsArrayBuffer\cf2 \strokec2 (\cf3 \strokec3 file\cf2 \strokec2 );\cf3 \strokec3 \
    \cf2 \strokec2 \}\cf3 \strokec3 \
\cf2 \strokec2 \}\cf3 \strokec3 \
}