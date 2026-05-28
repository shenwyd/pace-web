---
layout: policy
title: Privacy Policy
permalink: /privacy/
---

<section class="policy-hero">
  <div class="shell">
    <span class="cap">Privacy Policy</span>
    <h1>Your night is <span class="accent">yours.</span></h1>
    <p class="lede">Pace is built around a single rule: your data is yours. We don't have servers behind the app you're using today. We don't have analytics. We don't track you. This page is the long-form version of that rule — including how it holds up when Squad arrives.</p>
    <p class="stamp">Last updated: May 2026</p>
  </div>
</section>

<section class="glance">
  <div class="shell">
    <span class="cap">At a glance</span>
    <div class="glance-grid">
      <div class="item">
        <strong>No accounts</strong>
        <p>For solo Pace — open the app and you're in. You don't sign up.</p>
      </div>
      <div class="item">
        <strong>No servers</strong>
        <p>Solo Pace has no backend. Drinks and BAC stay on your phone.</p>
      </div>
      <div class="item">
        <strong>No analytics</strong>
        <p>No Mixpanel, no Amplitude, no Firebase events. Ever.</p>
      </div>
      <div class="item">
        <strong>No ads, no IAP</strong>
        <p>No tracking SDKs, no advertising identifiers, no upsells.</p>
      </div>
      <div class="item">
        <strong>HealthKit is read-only</strong>
        <p>Pace can read sleep + heart rate. It never writes back.</p>
      </div>
      <div class="item">
        <strong>Delete = gone</strong>
        <p>Remove the app and every byte goes with it.</p>
      </div>
    </div>
  </div>
</section>

<div class="policy-body" markdown="1">

## What stays on your device

Every piece of personal data Pace touches lives on your iPhone. It does not leave your device unless **you** explicitly send it (see "What leaves your device" below).

- Your date of birth — used once to confirm you're of legal drinking age in your region, then stored to skip the age gate on future launches.
- Your profile inputs: weight, biological sex, tolerance, nightly limit, emergency contact, home address.
- Every drink and water you log, and every session.
- Your acknowledgments — for example, that you've read the BAC disclaimer.

All of this is stored using Apple's local SwiftData framework on your device. There is no cloud sync, no backup, no copy on our end.

## What Pace reads from HealthKit

If you grant permission (an explicit tap inside the You tab), Pace reads two things from HealthKit:

- **Last night's sleep duration** — used to apply a 15% upward fatigue adjustment to your BAC estimate when sleep was under six hours.
- **Resting heart rate** — used as a secondary input to refine the estimate.

This access is **read-only**. Pace never writes alcohol data, drink logs, or anything else to HealthKit. You can revoke access at any time in iOS Settings → Health → Data Access & Devices → Pace.

## What leaves your device — and only when you choose

Pace integrates with other apps you may use. In every case, **you** initiate the data leaving your phone, and you control what's sent.

- **Emergency SOS** — when you tap SOS, your iPhone composes a text message containing the message you wrote (which may include your BAC, location, and ride plan). The text is sent only when **you** tap send in iOS's own Messages app.
- **Phone calls, transit directions, and Uber/Lyft links** — these open Apple's native Phone app, Apple Maps, or the Uber/Lyft app respectively. Pace passes them a destination address if you've set one in your profile. Pace does not intercept or log what those apps then do.
- **Widgets and Live Activities** — only display data already on your device. Nothing is uploaded.
- **Notifications** — Pace schedules local notifications on your phone (e.g. "Made it home?" check-ins). There is no remote push, no notification server, no third-party messaging service.

</div>

<div class="policy-body">
  <div class="callout" markdown="1">

<span class="cap">Squad <span class="tag">Opt-in</span></span>
## Friends-only, by design.

In the version of Pace currently on the App Store, the Squad tab is a placeholder. There is no backend behind it; nothing leaves your phone today. The rules below describe how Squad will behave once the backend launches in a future update. They are written down now so the contract is clear before the code ships.

- **Squad is opt-in.** Solo Pace keeps working exactly the way it works today. If you never enable Squad, your data continues to live only on your phone.
- **Sign in with Apple.** Squad uses Apple's Sign in with Apple. Pace receives an opaque identifier — never your email, phone number, name, or contact list. You can choose "Hide my Email" and we still won't see one.
- **What friends see.** Status categories only — phrases like *Sober*, *Feeling it*, *Heading home*, or *Made it home*. Pace never shares your numerical BAC, your drink history, or your location with friends.
- **Location is SOS-only.** If you trigger an SOS while in a squad, your location is shared with squad members at that moment, and only with them. The SOS event is automatically deleted within 24 hours.
- **Status auto-expires.** Status messages auto-delete 12 hours after a session ends. Nothing accumulates.
- **You control sharing per squad.** Each squad has its own toggles: presence only, status only, ride plan, SOS broadcast. Change them or leave a squad at any time.
- **Where Squad data lives.** Storage is a single managed Postgres database (Supabase). Every row is gated by row-level security tied to your Apple-issued identifier — meaning even on the server, your data is only ever readable by you and the friends you've chosen to share it with.

  </div>
</div>

<div class="policy-body" markdown="1">

## What Pace does not collect

- No account, no email, no password for solo Pace.
- No analytics, no telemetry, no crash reporting. If we ever add any of these, we will ask first and disclose it here.
- No advertising identifiers, no third-party SDKs that share data.
- No contact list access. Squad invites work via short codes you share manually.
- No location tracking. The Safety tab can open Apple Maps to your home address, but Pace itself does not store, transmit, or share your GPS coordinates outside of an active SOS event.

## Deleting your data

For solo Pace, delete the app from your iPhone. Everything is gone. There is no backup on our side — because there is no "our side."

If you've opted into Squad, the You tab will include a "Delete my account" action. Tapping it removes your account, your status records, and your squad memberships from the Squad backend within 24 hours. The app then behaves like a fresh install.

Revoking HealthKit permission stops Pace from reading any further sleep or heart-rate data, going forward.

## Children's privacy

Pace requires confirmation that you are at or above the legal drinking age in your region (typically 18, 19, or 21 depending on jurisdiction). The app is not designed for, marketed to, or intended for use by anyone under that age.

If you are below the legal drinking age in your region, please delete the app.

## Changes to this policy

If this policy changes, you'll see a notice in the app on next launch summarizing what changed. You're then free to delete the app if you no longer agree.

## Contact

Questions, concerns, or feedback? Email **[legal@paceapp.ca](mailto:legal@paceapp.ca)**.

</div>
