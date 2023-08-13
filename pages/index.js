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
          <div className="home-container01">
            <header
              data-thq="thq-navbar"
              className="home-navbar-interactive button"
            >
              <img
                alt="logo"
                src="/myscribe-1-2-1500h.png"
                className="home-image"
              />
              <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                <nav className="home-links">
                  <span className="home-text">About</span>
                  <span className="home-text01">Features</span>
                  <span className="home-text02">
                    <span className="home-text03">FAQs</span>
                    <br></br>
                  </span>
                </nav>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div className="home-nav">
                  <div className="home-top">
                    <img
                      alt="image"
                      src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                      className="home-logo"
                    />
                    <div data-thq="thq-close-menu" className="home-close-menu">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="home-links1">
                    <span className="home-text05">About</span>
                    <span className="home-text06">Features</span>
                    <span className="home-text07">Pricing</span>
                    <span className="home-text08">Team</span>
                    <span className="home-text09">Blog</span>
                  </nav>
                  <div className="home-buttons">
                    <button className="home-login button">Login</button>
                    <button className="button">Register</button>
                  </div>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container02">
                <div className="home-get-started">
                  <span className="home-text10">
                    833-924-2571
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </header>
            <div className="home-menu">
              <div id="mobile-menu" className="home-mobile-navigation">
                <div className="home-links2">
                  <span className="Link">Solutions</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Prices</span>
                </div>
                <div id="close-mobile-menu" className="home-close-mobile-menu">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon10"
                  >
                    <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
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
          </div>
          <header className="home-header">
            <h1 className="home-text14">Your co-pilot for expert calls</h1>
            <p className="home-text15">
              Save time taking notes, synthesizing notes, and extracting
              insights from expert calls
            </p>
            <div className="home-get-started1">
              <span className="home-text16">
                Text &quot;Hi&quot; to 833-924-2571 to get started
              </span>
            </div>
          </header>
        </section>
        <section className="home-features">
          <span className="home-text17">
            Let&apos;s save you the time and headache of expert calls
          </span>
          <div className="home-title">
            <span className="home-text18">
              So that you can get get back to more exciting parts of your day
            </span>
          </div>
          <div className="home-cards">
            <div className="home-container03">
              <div className="home-schedule card">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
                </svg>
                <span className="home-text19">Record</span>
                <span className="home-text20">
                  Record calls to play back and listen to later when you have
                  more time
                </span>
              </div>
              <div className="home-publish card">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M810 298v-84h-426v84h426zM640 640v-86h-256v86h256zM810 470v-86h-426v86h426zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h512zM170 256v598h598v84h-598q-34 0-59-25t-25-59v-598h84z"></path>
                </svg>
                <span className="home-text21">Transcribe</span>
                <span className="home-text22">
                  Best-in-class AI transcription so you can spend less time
                  taking notes and more time asking the right questions
                </span>
              </div>
            </div>
            <div className="home-container04">
              <div className="home-analyze card">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <span className="home-text23">Search &amp; Extract</span>
                <span className="home-text24">
                  <span>
                    Instantly request and get quotes from most relevant topics
                    discussed on your calls
                  </span>
                  <br></br>
                  <br></br>
                  <span className="home-text28">
                    &quot;Give me a quote about the expert&apos;s perspective on
                    the market&apos;s size and growth prospects in the
                    future&quot;
                  </span>
                </span>
              </div>
              <div className="home-get-leads card">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M768 342v-86h-342v86h342zM768 470v-86h-342v86h342zM640 598v-86h-214v86h214zM342 342v-86h-86v86h86zM342 470v-86h-86v86h86zM342 598v-86h-86v86h86zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                </svg>
                <span className="home-text29">Synthesize</span>
                <span className="home-text30">
                  Automatic summarization of the most important takeaways from
                  your calls to easily save and share with team members
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <span className="home-text31">
            Getting started has never been easier
          </span>
          <div className="home-cards1">
            <div className="home-container05">
              <div className="home-schedule1 card">
                <span className="home-text32">1 - Sign Up</span>
                <span className="home-text33">
                  <span className="home-text34">
                    Text &quot;Hi&quot; to 833-924-2571
                  </span>
                  <br></br>
                </span>
                <span className="home-text36">
                  <span className="home-text37">
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
                <span className="home-text39">
                  Save phone number as &quot;MyScribe&quot; contact for easy
                  access
                </span>
              </div>
              <div className="home-container06"></div>
            </div>
          </div>
          <div className="home-cards2">
            <div className="home-container07">
              <div className="home-schedule2 card">
                <span className="home-text40">2- Call</span>
                <span className="home-text41">
                  <span className="home-text42">
                    Call MyScribe at 833-924-2571 before your expert call
                  </span>
                  <br></br>
                </span>
                <span className="home-text44">
                  <span className="home-text45">
                    At the prompt, type in the phone number provided by the
                    network and press pound.  
                  </span>
                  <br></br>
                </span>
                <span className="home-text47">
                  <span className="home-text48">
                    Conduct the phone call and hang up at the end as normal 
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container08"></div>
            </div>
            <div className="home-container09">
              <div className="home-schedule3 card">
                <span className="home-text50">3- Email</span>
                <span className="home-text51">
                  <span className="home-text52">
                    5-10 mins after the call, you will receive an email with the
                    call recording, transcript, and takeaways from MyScribe
                  </span>
                  <br></br>
                </span>
                <span className="home-text54">
                  <span className="home-text55">
                    Respond to the email to chat with your call transcript and
                    ask specific questions such as: 
                  </span>
                  <br></br>
                </span>
                <span className="home-text57">
                  <span className="home-text58">
                    &quot;Provide a quote that caputures the expert&apos;s
                    perspective on the competitive landscape in the
                    market&quot; 
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container10"></div>
            </div>
          </div>
        </section>
        <section className="home-banners"></section>
        <section className="home-faq">
          <div className="home-heading">
            <span className="home-text60 title">
              Frequently asked questions
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text61">
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
                <span className="home-text62">
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
                <span className="home-text63">
                  — What if I have concerns about recording expert calls? 
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text64">
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
                <span className="home-text65">
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
                <span className="home-text66">
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
          <div className="home-top1">
            <div className="home-left">
              <span className="home-text67">
                By signing up with our product you agree with our Terms and
                Conditions.
              </span>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/myscribe-1-2-1500h.png"
              className="home-branding"
            />
            <span className="home-text68">Copyright © Active - 2022</span>
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
          .home-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #fffcfc;
          }

          .home-image {
            height: 2rem;
            margin-right: var(--dl-space-space-fourunits);
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text {
            font-size: 20px;
          }
          .home-text01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text03 {
            font-size: 20px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 2rem;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-get-started {
            color: white;
            cursor: pointer;
            display: flex;
            align-self: center;
            margin-top: 0px;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text10 {
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.15;
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
          .home-links2 {
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
          .home-icon10 {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .home-text14 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text15 {
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
          .home-text16 {
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
          .home-text17 {
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
          .home-text18 {
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
          .home-container03 {
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
          .home-icon12 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text19 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            line-height: 24px;
          }
          .home-publish {
            height: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon14 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text21 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text22 {
            line-height: 24px;
          }
          .home-container04 {
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
          .home-icon16 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text23 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text24 {
            line-height: 24px;
          }
          .home-text28 {
            font-style: italic;
          }
          .home-get-leads {
            height: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon18 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text29 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text30 {
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
          .home-text31 {
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
          .home-container05 {
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
          .home-text32 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text33 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text34 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text36 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text37 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text39 {
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            padding-top: 12px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
          }
          .home-container06 {
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
          .home-container07 {
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
          .home-text40 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text41 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text42 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text44 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text45 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text47 {
            font-size: 24px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            padding-top: 12px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
          }
          .home-container08 {
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
          .home-container09 {
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
          .home-text50 {
            width: 75%;
            font-size: 35px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-text51 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 12px;
          }
          .home-text52 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text54 {
            font-size: 24px;
            align-self: flex-start;
            line-height: 24px;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .home-text55 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text57 {
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
          .home-text58 {
            font-style: italic;
            font-weight: 400;
          }
          .home-container10 {
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
          .home-text60 {
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
          .home-text61 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text62 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text63 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text64 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text65 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text66 {
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
          .home-top1 {
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
          .home-left {
            width: 521px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text67 {
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
          .home-text68 {
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
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-features {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-text17 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text18 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text20 {
              line-height: 21px;
            }
            .home-text22 {
              line-height: 21px;
            }
            .home-text24 {
              line-height: 21px;
            }
            .home-text29 {
              font-size: 24px;
            }
            .home-text30 {
              line-height: 21px;
            }
            .home-text31 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text33 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-text36 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-text39 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-schedule2 {
              height: 100%;
              padding-bottom: 0px;
            }
            .home-text41 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-text44 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-text45 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text47 {
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: 21px;
              padding-top: 12px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 12px;
            }
            .home-text48 {
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text51 {
              line-height: 21px;
            }
            .home-text52 {
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: 21px;
            }
            .home-text54 {
              font-size: 22px;
              line-height: 21px;
            }
            .home-text57 {
              color: var(--dl-color-gray-black);
              font-size: 22px;
              line-height: 21px;
              background-color: var(--dl-color-gray-white);
            }
            .home-text58 {
              font-style: italic;
              font-weight: 400;
              line-height: 21px;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top1 {
              flex-direction: column;
            }
            .home-left {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text67 {
              color: rgb(104, 104, 104);
              font-size: 14px;
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text68 {
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
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container02 {
              align-items: center;
              justify-content: center;
            }
            .home-get-started {
              margin-top: 0px;
              margin-left: var(--dl-space-space-twounits);
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text14 {
              color: rgb(255, 255, 255);
              font-size: 48px;
              font-style: normal;
              font-weight: 700;
              line-height: 48px;
            }
            .home-text15 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features {
              margin-top: var(--dl-space-space-fourunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text17 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container03 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text19 {
              font-size: 24px;
            }
            .home-text20 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text21 {
              font-size: 24px;
            }
            .home-text22 {
              font-size: 14px;
            }
            .home-container04 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text23 {
              font-size: 24px;
            }
            .home-text24 {
              font-size: 14px;
            }
            .home-text30 {
              font-size: 14px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text31 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container05 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text32 {
              font-size: 24px;
            }
            .home-text33 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text34 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text36 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text37 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text39 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-container07 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-schedule2 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text40 {
              font-size: 24px;
            }
            .home-text41 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text42 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text44 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text45 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text47 {
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-text48 {
              font-size: 20px;
            }
            .home-container09 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text50 {
              font-size: 24px;
            }
            .home-text51 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text52 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text54 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text55 {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text57 {
              color: var(--dl-color-gray-black);
              font-size: 24px;
              line-height: 24px;
              background-color: var(--dl-color-gray-white);
            }
            .home-text58 {
              font-size: 20px;
              font-style: italic;
              font-weight: 400;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading {
              width: 100%;
            }
            .home-text60 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text61 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-navbar-interactive {
              color: #f9f8f8;
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-get-started {
              width: auto;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-text10 {
              line-height: 1.15;
            }
            .home-icon10 {
              align-items: center;
              justify-content: center;
            }
            .home-header {
              margin-top: 0px;
              justify-content: center;
            }
            .home-text14 {
              line-height: 64px;
            }
            .home-text15 {
              color: #eee9fe;
            }
            .home-get-started1 {
              width: 100%;
            }
            .home-text16 {
              font-size: 20px;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
            }
            .home-text17 {
              font-size: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container03 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container04 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-sixunits);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text31 {
              font-size: 30px;
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container05 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-schedule1 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-text33 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text34 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text36 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text37 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text39 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container07 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-schedule2 {
              margin-top: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-text41 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text42 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text44 {
              line-height: 24px;
            }
            .home-text45 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text47 {
              line-height: 24px;
            }
            .home-text48 {
              font-size: 18px;
            }
            .home-container09 {
              gap: 0;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-schedule3 {
              margin-top: 0px;
            }
            .home-text51 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text52 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text54 {
              font-size: 14px;
              line-height: 24px;
            }
            .home-text55 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text57 {
              color: var(--dl-color-gray-black);
              font-size: 24px;
              margin-top: var(--dl-space-space-oneandhalfunits);
              line-height: 24px;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
              background-color: var(--dl-color-gray-white);
            }
            .home-text58 {
              font-size: 20px;
              font-style: italic;
              font-weight: 400;
            }
            .home-faq {
              height: auto;
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
