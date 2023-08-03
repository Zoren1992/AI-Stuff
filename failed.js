// Authentication
// const session = require('express-session');
// const passport = require('passport');
// const { profile } = require('console');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Set session middleware
// app.use(session({
//   secret: 'yellow-fever',
//   resave: false,
//   saveUninitialized: true,
// }));

// Initialize Passport and restore authentication state from session
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new GoogleStrategy({
//   clientID: '280080649890-f503odfqheds8eump1psresb21q1725e.apps.googleusercontent.com',
//   clientSecret: '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',
//   callbackURL: 'http://localhost:3000/auth/google/callback',
// }, (accessToken, refreshToken, profile, done) => {
//   console.log('User Profile:', profile);
//   return done(null, profile);
// }));

// favicon? Wtf?
//  app.get('/favicon.ico', (req, res) => res.status(204));



// Template Engine set up
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('main', { user: req.user });
// });

// Route for Google login process
// app.get('/auth/google', passport.authenticate('google', {
//    scope: ['profile', 'email']
// }));

// Route for handling Google callback
// app.get('/auth/google/callback', passport.authenticate('google', {
//   successRedirect: '/', 
//   failureRedirect: '/login',
// })); 

// passport.serializeUser( (user, done) => {
//   done(null, user);
// });

// passport.deserializeUser( (user, done) => {
//   done(null, user);
// });



<header>
      <div class="navbar">
        <div class="logo">
          <h2>OpenAI Image Genrator</h2>
        </div>

        <div class="nav-links">
          <ul>
            <% if (!user) { %>
              <li>
                <a href="/auth/google">Login with Google</a>
              </li>
            <% } else { %>
              <li>
                <a href="#">Logout</a>
              </li>
            <% } %>
            <li>
              <a href="https://beta.openai.com/docs" target="_blank"
                >OpenAI API Docs</a
              >
            </li>
          </ul>
        </div>

    <main>
      <section class="showcase">
        <form id="image-form">
          <h1>Describe An Image</h1>
          <div class="form-control">
            <input type="text" id="prompt" placeholder="Enter Text" />
          </div>
          <!-- size -->
          <div class="form-control">
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium" selected>Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" class="btn">Generate</button>
        </form>
      </section>

      <section class="image">
        <div class="image-container">
          <h2 class="msg"></h2>
          <img src="" alt="" id="image" />
        </div>
      </section>
    </main>

    <div class="spinner"></div>