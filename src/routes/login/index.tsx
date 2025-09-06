import { GoogleSignInButton, SignInAuthScreen } from '@firebase-ui/react'

export default function LoginPage() {
  return (
    <div className='content'>
      {/* Note: FirebaseUI v7 is in alpha and not working. */}
      {/* See https://github.com/firebase/firebaseui-web/issues/1144 */}
      <SignInAuthScreen>
        <GoogleSignInButton />
      </SignInAuthScreen>
    </div>
  )
}
