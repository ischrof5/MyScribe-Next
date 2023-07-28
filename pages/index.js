import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>MyScribe</title>
          <meta property="og:title" content="MyScribe" />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <div className="home-links">
                <span className="Link">Solutions</span>
                <span className="Link">How it works</span>
                <span className="Link">Prices</span>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="image"
                    src="/myscribe-1-2-200h.png"
                    className="home-image"
                  />
                  <div className="home-links1">
                    <span className="home-text03 Link">Features</span>
                    <span className="home-text04 Link">How it works</span>
                    <span className="home-text05 Link">FAQs</span>
                  </div>
                  <div className="home-left1">
                    <div className="home-get-started">
                      <span className="home-text06">833-924-2571</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
          <header className="home-header">
            <h1 className="home-text07">Your co-pilot for expert calls</h1>
            <p className="home-text08">
              Save time taking notes, synthesizing notes, and extracting
              insights from expert calls
            </p>
            <div className="home-get-started1">
              <span className="home-text09">
                Text &quot;Hi&quot; to 833-924-2571 to get started
              </span>
            </div>
          </header>
        </section>
        <section className="home-features">
          <span className="home-text10">
            Let&apos;s save you the time and headache of expert calls
          </span>
          <div className="home-title">
            <span className="home-text11">
              So that you can get get back to more exciting parts of your day
            </span>
          </div>
          <div className="home-cards">
            <div className="home-container1">
              <div className="home-schedule card">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
                </svg>
                <span className="home-text12">Record</span>
                <span className="home-text13">
                  Record calls to play back and listen to later when you have
                  more time
                </span>
              </div>
              <div className="home-publish card">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 298v-84h-426v84h426zM640 640v-86h-256v86h256zM810 470v-86h-426v86h426zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h512zM170 256v598h598v84h-598q-34 0-59-25t-25-59v-598h84z"></path>
                </svg>
                <span className="home-text14">Transcribe</span>
                <span className="home-text15">
                  Best-in-class AI transcription so you can spend less time
                  taking notes and more time asking the right questions
                </span>
              </div>
            </div>
            <div className="home-container2">
              <div className="home-analyze card">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <span className="home-text16">Search &amp; Extract</span>
                <span className="home-text17">
                  <span>
                    Instantly request and get quotes from most relevant topics
                    discussed on your calls
                  </span>
                  <br></br>
                  <br></br>
                  <span className="home-text21">
                    &quot;Give me a quote about the expert&apos;s perspective on
                    the market&apos;s size and growth prospects in the
                    future&quot;
                  </span>
                </span>
              </div>
              <div className="home-get-leads card">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M768 342v-86h-342v86h342zM768 470v-86h-342v86h342zM640 598v-86h-214v86h214zM342 342v-86h-86v86h86zM342 470v-86h-86v86h86zM342 598v-86h-86v86h86zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                </svg>
                <span className="home-text22">Synthesize</span>
                <span className="home-text23">
                  Automatic summarization of the most important takeaways from
                  your calls to easily save and share with team members
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <span className="home-text24">
            Getting started has never been easier
          </span>
          <div className="home-cards1">
            <div className="home-container3">
              <div className="home-schedule1 card">
                <span className="home-text25">1 - Sign Up</span>
                <span className="home-text26">
                  <span className="home-text27">
                    Text &quot;Hi&quot; to 833-924-2571
                  </span>
                  <br></br>
                </span>
                <span className="home-text29">
                  <span className="home-text30">
                    Provide the email address to receive call recordings and
                    transcripts.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="home-text32">
                  Save phone number as &quot;MyScribe&quot; contact for easy
                  access
                </span>
              </div>
              <div className="home-container4"></div>
            </div>
          </div>
          <div className="home-cards2">
            <div className="home-container5">
              <div className="home-schedule2 card">
                <span className="home-text33">2- Call</span>
                <span className="home-text34">
                  <span className="home-text35">
                    Call MyScribe at 833-924-2571 before your expert call
                  </span>
                  <br></br>
                </span>
                <span className="home-text37">
                  <span className="home-text38">
                    At the prompt, type in the phone number provided by the
                    expert network and press pound.  
                  </span>
                  <br></br>
                </span>
                <span className="home-text40">
                  Conduct the phone call and hang up at the end as normal 
                </span>
              </div>
              <div className="home-container6"></div>
            </div>
            <div className="home-container7">
              <div className="home-schedule3 card">
                <span className="home-text41">3- Email</span>
                <span className="home-text42">
                  <span className="home-text43">
                    5-10 mins after the call, you will receive an email with the
                    call recording, transcript, and takeaways from MyScribe
                  </span>
                  <br></br>
                </span>
                <span className="home-text45">
                  <span className="home-text46">
                    Respond to the email to chat with your call transcript and
                    ask specific questions such as: 
                  </span>
                  <br></br>
                </span>
                <span className="home-text48">
                  <span className="home-text49">
                    &quot;Provide a quote that caputures the expert&apos;s
                    perspective on the competitive landscape in the
                    market&quot; 
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container8"></div>
            </div>
          </div>
        </section>
        <section className="home-banners"></section>
        <section className="home-faq">
          <div className="home-heading">
            <span className="home-text51 title">
              Frequently asked questions
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text52">
                  — Is the information discussed in my expert calls secure while
                  using MyScribe?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text53">
                  MyScribe does not store any interactions, transcripts, or any
                  other information for 3rd party use. All transcripts are
                  secure and for your use only. All AI-based features in the app
                  do not use your data, transcripts, or questions for 3rd party
                  use or training purposes so you can be confident that your
                  information is secure.
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text54">
                  — What if I have concerns about recording expert calls? 
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text55">
                  If you have any questions or concerns about recording expert
                  calls we encourage you to obtain consent from your expert at
                  the beginning of the call. Many expert networks screen experts
                  for their consent to being recorded, however asking the expert
                  at the beginning of the call if they consent to being recorded
                  is generally a good idea.   
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header3">
                <span className="home-text56">
                  — Is MyScribe a replacement for my expert network providers?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text57">
                  MyScribe does not replace expert network providers. MyScribe
                  is intended to make the calls you pay for and schedule with
                  your expert networks easier to extract information from! As
                  such, you must continue to arrange expert calls as you
                  normally would.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div
              data-faq="closed"
              className="home-accordion-container3 accordionContainer"
            ></div>
          </div>
          <div>
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-left2">
              <span className="home-text58">
                By signing up with our product you agree with our Terms and
                Conditions.
              </span>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/myscribe-1-2-200h.png"
              className="home-branding"
            />
            <span className="home-text59">Copyright © Active - 2022</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 828px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #5228f5;
          }
          .home-menu {
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            width: 75%;
            height: auto;
            display: flex;
            max-width: 75%;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-image {
            flex: initial;
            width: auto;
            height: 40%;
            align-self: center;
            object-fit: cover;
          }
          .home-links1 {
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-text03 {
            font-size: 16px;
            line-height: 1.15;
            margin-left: 40px;
          }
          .home-text04 {
            font-size: 16px;
            line-height: 1.15;
            margin-left: 40px;
          }
          .home-text05 {
            font-size: 16px;
            line-height: 1.15;
            margin-left: 40px;
            letter-spacing: auto;
          }
          .home-left1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-get-started {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #000000;
          }
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text06 {
            color: rgb(255, 255, 255);
            font-size: autopx;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.15;
          }
          .home-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .home-text07 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text08 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-get-started1 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text09 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.15;
          }
          .home-features {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: EFF0F2;
          }
          .home-text10 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text11 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-schedule {
            height: auto;
            padding-top: 28px;
          }
          .home-icon02 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            line-height: 24px;
          }
          .home-publish {
            height: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon04 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text14 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            line-height: 24px;
          }
          .home-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-analyze {
            height: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon06 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text16 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text17 {
            line-height: 24px;
          }
          .home-text21 {
            font-style: italic;
          }
          .home-get-leads {
            height: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon08 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            line-height: 24px;
          }
          .home-how-it-works {
            gap: 0;
            width: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 137px;
            background-color: #211062;
          }
          .home-text24 {
            color: rgb(251, 250, 250);
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-cards1 {
            width: 100%;
            height: 344px;
            display: flex;
            max-width: 1200px;
            margin-top: 0px;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .home-schedule1 {
            width: auto;
            height: auto;
            padding-top: 2px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-text25 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text26 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text29 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text30 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text32 {
            font-size: 24px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            padding-top: 12px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
          }
          .home-container4 {
            width: 25%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/asset%209-200w.png');
          }
          .home-cards2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 320px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .home-schedule2 {
            width: auto;
            height: auto;
            padding-top: 2px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 42px;
          }
          .home-text33 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text34 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text35 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text37 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text38 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text40 {
            font-size: 24px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            padding-top: 12px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
          }
          .home-container6 {
            gap: var(--dl-space-space-twounits);
            width: 25%;
            height: 100%;
            display: flex;
            align-items: stretch;
            padding-top: 0px;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/asset%2011-200w.png');
          }
          .home-container7 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 400px;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .home-schedule3 {
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-oneandhalfunits);
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-text41 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text42 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text43 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text45 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text46 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text48 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
            background-color: var(--dl-color-gray-white);
          }
          .home-text49 {
            font-style: italic;
            font-weight: 400;
          }
          .home-container8 {
            width: 25%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/asset%2015-200w.png');
          }
          .home-banners {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-faq {
            width: 100%;
            height: 767px;
            display: flex;
            padding: 120px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 28px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text51 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text52 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text53 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text54 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text55 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text56 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text57 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-accordion-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .home-top {
            width: 100%;
            height: 43px;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-left2 {
            width: 521px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text58 {
            color: rgb(104, 104, 104);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text59 {
            color: #686868;
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-links1 {
              display: none;
            }
            .home-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-get-started {
              display: none;
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-text10 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text11 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text13 {
              line-height: 21px;
            }
            .home-text15 {
              line-height: 21px;
            }
            .home-text17 {
              line-height: 21px;
            }
            .home-text22 {
              font-size: 24px;
            }
            .home-text23 {
              line-height: 21px;
            }
            .home-text24 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text26 {
              line-height: 21px;
            }
            .home-text29 {
              line-height: 21px;
            }
            .home-text32 {
              line-height: 21px;
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text34 {
              line-height: 21px;
            }
            .home-text37 {
              line-height: 21px;
            }
            .home-text40 {
              line-height: 21px;
            }
            .home-text42 {
              line-height: 21px;
            }
            .home-text43 {
              line-height: 21px;
            }
            .home-text45 {
              line-height: 21px;
            }
            .home-text48 {
              line-height: 21px;
            }
            .home-text49 {
              line-height: 21px;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-left2 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text58 {
              color: rgb(104, 104, 104);
              font-size: 14px;
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text59 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-get-started {
              display: none;
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text07 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text08 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text10 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text12 {
              font-size: 24px;
            }
            .home-text13 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text14 {
              font-size: 24px;
            }
            .home-text15 {
              font-size: 14px;
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text16 {
              font-size: 24px;
            }
            .home-text17 {
              font-size: 14px;
            }
            .home-text23 {
              font-size: 14px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text24 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text25 {
              font-size: 24px;
            }
            .home-text26 {
              font-size: 14px;
            }
            .home-text29 {
              font-size: 14px;
            }
            .home-text32 {
              font-size: 14px;
            }
            .home-container5 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text33 {
              font-size: 24px;
            }
            .home-text34 {
              font-size: 14px;
            }
            .home-text37 {
              font-size: 14px;
            }
            .home-text40 {
              font-size: 14px;
            }
            .home-container7 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text41 {
              font-size: 24px;
            }
            .home-text42 {
              font-size: 14px;
            }
            .home-text43 {
              font-size: 14px;
            }
            .home-text45 {
              font-size: 14px;
            }
            .home-text48 {
              font-size: 14px;
            }
            .home-text49 {
              font-size: 14px;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading {
              width: 100%;
            }
            .home-text51 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
            .home-icon {
              align-items: center;
              justify-content: center;
            }
            .home-text08 {
              color: #eee9fe;
            }
            .home-get-started1 {
              width: 100%;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container5 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container7 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
