import passport from "passport";
import FacebookStrategy from 'passport-facebook-token'
import {User} from '../entity/User'

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID!,
  clientSecret: process.env.FACEBOOK_APP_SECRET!
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: {
      email: profile.emails[0].value
    } })
    if (!user) {
      user = new User
      user.email = profile.emails[0].value
      user.username = profile.displayName
      user.profilePic = profile.photos[0].value
      await User.save(user)
    }
    
    return done(null, user)
  } catch(err) {
    console.log(err)
    done(null, false)
  }
}))