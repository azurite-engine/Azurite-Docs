from bs4 import BeautifulSoup as bs
import requests
import json
import re
import sys
import platform
import os

# Setup
try:
    url = sys.argv[1]
    print(url)
    if url == None or url == "":
        print(Fore.RED + Fore.RED + "[SCRAPER:FATAL] Please pass a URL as a command line argument.")
        exit()
    r = requests.get(url)
    page = r.text

    soup = bs(page, features="html5lib")
except:
    print("[SCRAPER:FATAL] Failed to connect or retrieve URL from command line. Did you pass a URL?")
    exit()

# Helper methods
def S (selector):
    tmp = ""
    try:
        tmp = soup.select(selector)[0].text
    except:
        print("[SCRAPER:WARNING] Could not find " + selector + "\nYou will have to manually fix this item to the generated webpage.\n")
        # tmp = "[SCRAPER:WARNING] Could not find " + selector
        tmp = """<div class="danger"><strong>[SCRAPER:WARNING]</strong> The JavaDoc Scraper was unable to find the element:<br><code>{}</code><br>Please manually add it or remove this warning.</div>""".format(selector)

    return tmp

def SS (selector):
    tmp = ""
    try:
        tmp = soup.select(selector)
    except:
        print("[SCRAPER:WARNING] Could not find " + selector +
              "\nYou will have to manually fix this item to the generated webpage.\n")
        tmp = """<div class="danger"><strong>[SCRAPER:WARNING]</strong> The JavaDoc Scraper was unable to find the element:<br><code>{}</code><br>Please manually add it or remove this warning.</div>""".format(selector)


    return tmp

def fix (str):
    return re.sub(' +', ' ', str.replace(u'\u200b', "").replace(u'\u00a0', " ").replace(u'\n', "")).strip()

# Scrape
title = fix(S("body > main > div.contentContainer > div.description > ul > li > pre > span"))
description = fix(S("body > main > div.contentContainer > div.description > ul > li > div"))

# Constructors
tempC1 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(2) > ul > li > table > tbody > tr > th")
tempC2 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(2) > ul > li > table > tbody > tr > td")
constructors = []
for i in range(2, len(tempC1)):
    try:
        constructors.append([fix(tempC1[i].text), fix(tempC2[i-2].text)])
    except:
        print("[SCRAPER:INFO] Missing data in constructors table, you may want to manually fix this item to the generated webpage.\n")
if len(tempC1) == 0:
    constructors.append(["""<div class="danger"><strong>[SCRAPER:WARNING]</strong> The JavaDoc Scraper was unable to find the any data for the constructors table. Please manually add any missing data or remove this warning and table.</div>""", "", ""])

# Methods
c1 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(3) > ul > li > table .colFirst")
c2 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(3) > ul > li > table .colSecond")
c3 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(3) > ul > li > table .colLast")
methods = []

for i in range(1, len(c1)):
    try:
        methods.append([fix(c1[i].text), fix(c2[i].text), fix(c3[i].text)])
    except:
        print("[SCRAPER:INFO] Missing data in methods table, you may want to manually fix this item to the generated webpage.\n")

if len(c1) == 0:
    methods.append(["""<div class="danger"><strong>[SCRAPER:WARNING]</strong> The JavaDoc Scraper was unable to find the any data for the methods table. Please manually add any missing data or remove this warning and table.</div>""", "", ""])


# Fields
c1 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(1) > ul > li > table > tbody > tr > td.colFirst")
c2 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(1) > ul > li > table > tbody > tr.altColor > th")
c3 = SS("body > main > div.contentContainer > div.summary > ul > li > section:nth-child(1) > ul > li > table > tbody > tr.altColor > td.colLast")
fields = []


for i in range(0, len(c1)):
    try:
        fields.append([fix(c1[i].text), fix(c2[i].text), fix(c3[i].text)])
    except:
        print("[SCRAPER:INFO] Missing data in fields table, you may want to manually fix this item to the generated webpage.\n")
if len(c1) == 0:
    fields.append(["""<div class="danger"><strong>[SCRAPER:WARNING]</strong> The JavaDoc Scraper was unable to find the any data for the fields table. Please manually add any missing data or remove this warning and table.</div>""", "", ""])

data = {
    "Title": title,
    "Description": description,
    "Constructors": constructors,
    "Fields": fields,
    "Methods": methods
}

with open("website.json", "w") as f:
    json.dump(data, f, indent = 4)

print("[SCRAPER:SUCCESS] Done, saved to website.json")

OS = platform.system()

print("[GENERATOR:INFO] Detected OS is " + OS + ", running generator.")
try:
    if OS == "Linux":
        # os.system("./AzuriteGenerator-linux")
        print("[GENERATOR:FATAL] Unable to run on {}.".format(OS))
    elif OS == "Darwin":
        # os.system("./AzuriteGenerator-macos")
        print("[GENERATOR:FATAL] Unable to run on {}.".format(OS))
    elif OS == "Windows":
        os.system("AzuriteGenerator.exe")
    print("[GENERATOR:SUCCESS] Sucessfully called the generator executable")
except:
    print("[GENERATOR:FATAL] Failed to call the generator executable.")
