## Technical Highlights

- **Separated localStorage into three distinct keys** — user actions, custom entries, and profile 
data are each stored independently rather than in one blob. This prevents unrelated data from 
overwriting each other and makes the app easier to debug and extend.

- **Built a chained filter and sort pipeline** — search, genre, status, and sort all run in a 
single `getVisibleItems()` function that processes the data in sequence. This keeps the logic 
centralized so every filter combination works correctly without duplicating code.

- **Custom title system with full CRUD** — users can add their own movies or books through a 
validated form, and deleting a custom entry cleans it up from both the custom list and user data 
simultaneously. This meant managing two data sources as if they were one, which required careful 
merging logic throughout the app.

- **Toggle-to-clear star rating** — clicking the same star twice removes the rating instead of 
getting stuck at 1. This small interaction detail required checking the current rating before 
saving, but it makes the experience feel intentional rather than broken.

- **Responsive card grid without media queries** — the layout uses `repeat(auto-fill, minmax(210px, 1fr))` 
so cards reflow automatically at any screen width. This approach is more flexible than writing 
breakpoints for every device size.
