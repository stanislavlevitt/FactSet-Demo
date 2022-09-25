**Demo Project for FactSet**
<br/>

Coding Challenge was completed in less than four hours.  This backend application integrates with the GitHub Api in order to discover popular repositories on GitHub.

<br />

## Local Setup

---

**From the terminal run:**

<pre>
git clone https://github.com/stanislavlevitt/FactSet-Demo.git
npm install
npm start
</pre>

**After npm start**<br />
The App will start running in development mode.<br />
Open [http://localhost:3001](http://localhost:3001)<br />
The page will reload if you make edits.

<br />

## App Walk through

---

<p align="center"><strong>In order to view the most popular repositories, sorted by number of stars. Visit your localhost and enter the url "/api/github"</strong></p>

<p align="center">
  <img src="/public/getAll.gif"/>
</p>
<br />

<p align="center"><strong> You can limit the amout of repositories seen by adding a limit number to your URL parameters. Once you add the limit you can view the top 10,50,100 repositories by stars. Visit your localhost and enter the url "/api/github/10"</strong></p>

<p align="center"><strong>NOTE: If your limit is not a integer number, it will return the default amount that is specified by the Github Api</strong></p>

<p align="center">
  <img src="/public/getLimits.gif"/>
</p>
<br />

<p align="center"><strong> You can include a date range when scoping your repositories limits by including "?date=2022-07-10" at the end of your URL. This will limit results to repositories newer than your date limitVisit your localhost and enter the url "/api/github/1?date=2022-07-10"</strong></p>

<p align="center"><strong>NOTE: Due to the high volume of repositories being added daily. If your date range is too old the GitHub Api may not be able to properly sort the popularity of the repositories by stars. If this happens an added warning will be included in the response.

Further development is needed to workaround this limitation of the Github Api</strong></p>

<p align="center">
  <img src="/public/getDate.gif"/>
</p>
<br />
