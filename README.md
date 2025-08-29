# Coffee Tracker  

## [See the App!](https://personal-coffee-tracker.netlify.app/)  

A web application for coffee enthusiasts to log, track, and perfect their coffee brewing process. Catalog your coffee beans, record every brew with precise parameters, and review your history to dial in the perfect cup.  

#### [Client Repo](https://github.com/dillanDataNerd/coffee-tracker-client)  
#### [Server Repo](https://github.com/dillanDataNerd/coffee-tracker-json-server)  

---

## Features  

- **Log Brews:** Record details (method, weight, output, time, temperature, tasting notes, rating).  
- **Manage Beans:** Digital inventory of beans with roaster, origin, process, roast level, and notes.  
- **Homepage Dashboard:** Timer since your last coffee + carousel of recent brews.  
- **Brew & Bean History:** Full list of past brews and beans.  
- **Detailed Views:** Expand any brew or bean for full parameters and relationships.  
- **Advanced Filtering:**  
  - Brews by method or bean.  
  - Beans by roaster or origin.  
- **Brew Again:** Clone past brews with one click.  
- **CRUD Operations:** Create, Read, Update, Delete beans & brews.  

---

## Tech Stack  

- **Frontend:** React, Vite  
- **UI:** Bootstrap, React-Bootstrap  
- **Routing:** React Router  
- **API:** Axios  
- **Backend:** JSON Server (`_expand`, `_embed`, `_sort`, `_order`)  
- **Linting:** ESLint  

---

# Client Structure  

## User Stories  

- **Homepage** – As a user, I want to see a dashboard with recent brews and a timer since my last coffee.  
- **Beans** – As a user, I want to add/edit/delete beans to track my inventory.  
- **Brews** – As a user, I want to log brews with detailed parameters and tasting notes.  
- **Filter/Search** – As a user, I want to filter brews by bean or method, and beans by roaster or origin.  
- **Brew Again** – As a user, I want to quickly remake a brew with past settings.  
- **404** – As a user, I want to see a friendly error page if I land somewhere wrong.  

---

## React Router Routes (Client)

| Path                  | Page             | Component(s)      | Behavior                                                        |
|-----------------------|-----------------|------------------|-----------------------------------------------------------------|
| `/`                   | Home             | HomePage          | Dashboard showing timer + recent brews carousel                 |
| `/brews`              | Brews List       | BrewsPage         | Shows all brews, with filters                                   |
| `/brews/new`          | Create Brew      | CreateBrew        | Form to create a new brew                                       |
| `/brews/new/:brewId`  | Create Brew      | CreateBrew        | Pre-fills form with data from an existing brew (remake feature) |
| `/brews/:brewId`      | Brew Details     | BrewDetailsPage   | Displays full brew details + linked bean                        |
| `/brews/edit/:brewId` | Edit Brew        | BrewEditPage      | Form to edit an existing brew                                   |
| `/beans`              | Beans List       | BeansPage         | Shows all beans, with filters                                   |
| `/beans/new`          | Create Bean      | CreateBean        | Form to create a new bean                                       |
| `/beans/:beanId`      | Bean Details     | BeansDetailsPage  | Displays full bean details + related brews                      |
| `/beans/edit/:beanId` | Edit Bean        | BeanEditPage      | Form to edit an existing bean                                   |
| `/*`                  | Error            | ErrorPage         | Catch-all route, shows error/404 page                           |

---

## Other Components  

- Navbar  
- Filters (Bean, method, origin, roaster  )
- Carousal
- Coffee timer
- Brew summary, Brew recipe and Bean cards 


---

## Getting Started  

1. Clone the repo  
   ```bash
   git clone https://github.com/dillanDataNerd/coffee-tracker-client.git
   cd coffee-tracker-client
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Set up `.env` with backend URL  
   ```
   VITE_SERVER_URL=http://localhost:3000
   ```
4. Run the app  
   ```bash
   npm run dev
   ```  
5. Run the json sever (link above)

---

## Future wishlist  

- User authentication (login, signup, profile).  
- Image uploads for beans (bag/label photos).  
- Brew statistics dashboard (weekly/monthly trends).  
- Web-optimized layout refinements.
- Make better taste suggestions in brew create form  
- Social sharing of brews.  

---

## Links  

### Collaborators  
- [Dillan](https://github.com/dillanDataNerd)  

### Project  
- [Client Repo](https://github.com/dillanDataNerd/coffee-tracker-client)  
- [Server Repo](https://github.com/dillanDataNerd/coffee-tracker-json-server)  
- [Deployed App](https://personal-coffee-tracker.netlify.app/)  


### Slides  
- [Presentation Slides](your-slides-link-here)  
