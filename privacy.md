---
layout: policy
title: Privacy Policy
permalink: /privacy/
---
<!-- PRE-LAUNCH DRAFT 2026-06-03 — Pace Social pivot. Published ahead of the app as a pre-launch policy. STILL REQUIRES lawyer review before the app ships / collects real user data. -->

<section class="policy-hero">
  <div class="shell">
    <span class="cap">Privacy Policy</span>
    <h1>Honest about what <span class="accent">leaves your phone.</span></h1>
    <p class="lede">Pace is now a social app. Some things you create — your profile, your posts, who you follow — live on our servers so we can deliver them to your audience. Other things — your drink log, your sessions, your ride plans — never leave your device. This page draws that line clearly, in plain language.</p>
    <p class="stamp">Last updated: 2026-06-03</p>
  </div>
</section>

<section class="glance">
  <div class="shell">
    <span class="cap">At a glance</span>
    <div class="glance-grid">
      <div class="item">
        <strong>You have an account</strong>
        <p>Pace uses Sign in with Apple. We create a profile for you on our servers.</p>
      </div>
      <div class="item">
        <strong>Posts go to our servers</strong>
        <p>A post is two photos. We store and deliver them, then auto-delete after 24 hours.</p>
      </div>
      <div class="item">
        <strong>Your drink log stays local</strong>
        <p>Drinks, sessions, and ride plans live only on your iPhone. We never see them.</p>
      </div>
      <div class="item">
        <strong>HealthKit is read-only</strong>
        <p>Sleep and heart rate are read on-device. They are never uploaded.</p>
      </div>
      <div class="item">
        <strong>No ads, no selling data</strong>
        <p>No advertising, no data sales, no third-party analytics SDKs.</p>
      </div>
      <div class="item">
        <strong>Delete = gone</strong>
        <p>Delete your account and we remove your profile, posts, graph, and reactions.</p>
      </div>
    </div>
  </div>
</section>

<div class="policy-body" markdown="1">

## What we collect

To run an account-based social app, some information has to reach our servers. We collect only what we need to give you a profile, deliver your posts, and keep the community safe.

**Account information.** You sign in with **Sign in with Apple**. From Apple we may receive your name and an email address — and if you choose "Hide My Email," that email is a private Apple relay address rather than your real one. We use this to create and identify your account.

**Profile data.** We store, on our servers, the profile you build: your username, your display name, an optional avatar image, an optional bio, and your privacy setting (whether your profile is public or private).

**Posts.** In Pace, a "post" is **two photos taken at once — one from the front camera, one from the back — plus an optional caption.** When you publish a post, those photos and caption are **uploaded to and stored on our servers**, then delivered to your audience. Before any photo leaves your phone, **its location and other EXIF metadata are stripped** so we never receive where or when the photo was taken from the file itself.

**Social graph.** We store who you follow, who follows you, and any pending follow requests. This is what lets us deliver the right posts to the right people.

**Reactions.** When you react to a post with an emoji, we store that reaction so it can be shown on the post.

**Reports and moderation records.** If you report a post or a user, we store that report so our team can review it and act on it.

## How we use it

- To create and maintain your account and profile.
- To deliver your posts to the people who should see them, based on your privacy setting and your followers.
- To show follows, follow requests, and reactions.
- To operate the discovery / explore experience for public profiles.
- To keep Pace safe — reviewing reports, removing content that breaks our rules, and acting on abusive accounts.

We do **not** use your data to serve ads, and we do **not** sell your data. Pace contains no third-party advertising or analytics SDKs.

</div>

<div class="policy-body">
  <div class="callout" markdown="1">

<span class="cap">On your device <span class="tag">Local only</span></span>
## What stays on your device

The safety side of Pace — the part that helps you keep track of a night — never reaches our servers.

- **Your drink log, your sessions, and your ride-plan data** are stored **only on your iPhone**, using Apple's local SwiftData framework. We do **not** upload them, back them up, or sync them anywhere. They are not part of your account, your profile, or your posts.
- **HealthKit data.** If you connect HealthKit, Pace reads data such as sleep and heart rate **on-device only**, to inform on-device features. This HealthKit data is **never uploaded to our servers.** Access is read-only, and you can revoke it any time in iOS Settings → Health → Data Access & Devices → Pace.

If you only ever use Pace's solo tracking features and never post, the only things that reach our servers are the account and profile you created when you signed in.

  </div>
</div>

<div class="policy-body" markdown="1">

## Sharing & visibility

What other people can see depends on your privacy setting.

- **Private profiles.** Your posts are delivered **only to followers you have approved.** Follow requests are pending until you accept them.
- **Public profiles.** Your posts may be visible to other Pace users **beyond your direct followers**, including in a discovery / explore feed. If you don't want that, set your profile to private.

You choose your setting, and you can change it. We share your content according to that setting and to operate the app — we do not share or sell it to advertisers or data brokers.

**Service providers.** Our servers run on **Supabase** (managed Postgres and storage), which processes data on our behalf to host your account, profile, posts, graph, and reactions. We use them as a hosting provider, not to monetize your data.

## Moderation & safety

Pace has a **zero-tolerance policy for objectionable content and abusive users.** To enforce it:

- **You can report** any post or user. Reports are stored and reviewed.
- **You can block** other users, which stops their interaction with you.
- **We can remove** content that violates our rules.
- **Content that receives multiple reports may be automatically hidden** pending human review.
- **Automated content-safety screening may run on uploaded images** to detect prohibited content. This means images you post are processed — by automated systems and, where needed, by our review team — for safety purposes.

These measures exist to keep the community safe and to meet Apple's requirements for apps with user-generated content.

## Your choices & deletion

**Posts auto-expire.** Every post is **automatically deleted from our servers 24 hours after it is published.** You don't have to do anything.

**Delete individual content.** You can delete your own posts, and remove follows, at any time in the app.

**Delete your account.** You can delete your account from within Pace. When you do, we **remove your profile, your posts, your social-graph records (your follows and followers), and your reactions from our servers.** We carry out the deletion promptly — generally within 30 days — except where we are required to retain certain records (for example, a record tied to a safety report) for legitimate safety or legal reasons. Because your drink log and sessions live only on your device, deleting the app also removes those.

**Revoke HealthKit.** Revoking HealthKit access in iOS Settings stops Pace from reading any further sleep or heart-rate data.

## Children

Pace is for adults at or above the legal drinking age in their region — and is restricted to users **17 and older**. The app is not designed for, marketed to, or intended for anyone below the legal drinking age. If you are below the legal drinking age in your region, please delete the app.

## Changes to this policy

As Pace's social features roll out, this policy will change. When it does, we'll update the date at the top and surface a notice in the app summarizing what changed, so you can decide whether you still agree before continuing to use Pace.

## Contact

Questions, concerns, privacy requests, or deletion help? Email **[legal@paceapp.ca](mailto:legal@paceapp.ca)**.

</div>
