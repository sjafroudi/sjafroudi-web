
# Exploratory Lab 2

![alt text](https://github.com/sjafroudi/sjafroudi-web/blob/gh-pages/G472Lab2/1.png)

## Collaborations and reliance on other resources:

A few changes were made to my map after consulting with a fellow peer. They noticed a misalignment with my color scheme (i.e., the polygon and point colors did not match when they easily could have been matching) which was then fixed. They also noted that it would have been interesting to see the points categorized by genus or specie type as opposed to year, which I also felt would have been a more interesting field to highlight on my map. Since the dataset was so large, there were over 100 specie types, which felt difficult to try and visualize for this map. 

### Other resources that were consulted:

[Encycolorpedia](https://encycolorpedia.com/) – a great resource if you are feeling uninspired about which color scheme to choose for a given project.

[Stack Exchange](https://stackexchange.com/) – where everyone has already wondered about the thing you’re currently wondering about.

[Mapbox GL JS](https://www.mapbox.com/mapbox-gljs) – most notably the tutorial on how to [Show and hide layers](https://docs.mapbox.com/mapbox-gl-js/example/measure/). The cursor used in my map was borrowed from their [Measure distances tutorial](https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers/). 

[Turf JS](https://turfjs.org/) – provided the [envelope](https://turfjs.org/docs/#envelope) function.

## Reflective analysis:

I think if I were to place this map in the context of the “Stages of Interaction” framework (Roth, 2017), there are several observations that may be relevant. First, it is not immediately apparent what the boxes represent–it almost looks like they were left there by accident. As the map viewer begins to engage with the map title and description, it might frankly still be confusing what those boxes represent. However, the particular purpose of the map, which is to visualize marine biological data from a 1956 to 1958 Soviet Antarctic exhibition, becomes apparent. The map user is then informed that they can hover on each point to see more information about each data observation. If the map user decides to hover over a given point, they will learn which year it was collected, the specific citation for the marine biological observation, and the latitude and longitude of the observation. Perhaps after citing a few more points, the map user might wonder what the toggle options in the upper right side of the map represent. Depending on the individual interacting with the map, they might backtrack to the title frame and see the instructions to “click on each year to turn extent polygons on and off.” Then, if they make it past the programmer’s unresolved bug (i.e., initially, you have to click a given button twice for the interactivity work), then they will observe the polygon corresponding to the button disappear and reappear if they press the button again. This part of the interaction between the map and map-user could be described as “interpreting the system state”(Roth, 2017) which involves interacting with particular features of the map in order to abstract what the purpose the feature might be (both as an interactive utility but also as a method of adding meaning to the purpose of the map). Hopefully, by this point, it is apparent that the polygons cover the spatial extent of the observations for a given year, but given the somewhat disorienting nature of the map, I would not be surprised if the map user was still confused. 

Overall, this lab provided a meaningful opportunity for me to try using new mapping libraries along with CSS, HTML, and Javascript. This lab also provided a great opportunity to reflect on the decisions I made during the map-making process as well as the potential unconcerted outcomes of the map. I think this was definitely useful in helping me understand how data can be added to a map and manipulated further, and how Leaflet, Mapbox GL JS, Turf JS, agree to disagree amongst each other. 
