#!/bin/bash

# Run the web scraper from bin

python ./scrape.py $1
./AzuriteGenerator-linux test
