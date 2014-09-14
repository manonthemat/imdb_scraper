First experience scraping with node, express, request and cheerio.

#Setup and usage
Clone this repository, then run

    npm install
    
to install this script's dependencies.

Run the server with

    node server.js

then send a HTTP GET request to http://localhost:8080/scrape/ followed by the imdb id for the title.

    curl http://localhost:8080/scrape/tt0133093

will scrape http://www.imdb.com/title/tt0133093/ for its title, year of release and rating.

In this case, the file output.json will be (over)written with json data.

You can then try to read that data. For example using Python.

    python3 -c "import json; print(json.load(open('output.json')))"

should return something like this:

    {'title': 'The Matrix', 'rating': 8.7, 'release': 1999}

