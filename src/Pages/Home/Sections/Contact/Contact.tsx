import emailjs from "@emailjs/browser";
import { Button, Grid } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "react-jss";
import { toast } from "react-toastify";
import {
  EmailCircle,
  GithubCircle,
  LinkedinCircle,
  Send,
} from "../../../../Assets/Svg";
import { TextInput } from "../../../../Components";
import { emailData, links } from "../../../../Constants/constants";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useMainStyle } from "./../Main/Main.style";
import { useContactStyle } from "./Contact.style";

export const Contact = () => {
  const context = useContext(AppContext);
  const { ref, onScreen } = useOnScreen();
  const form = useRef<HTMLFormElement>(null);
  const [submitRequest, setSubmitRequest] = useState(false);
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("contact");
  }, [onScreen]);
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useMainStyle({ theme }),
    ...useHomeStyle({ theme }),
    ...useGlobalStyles({ theme }),
    ...useContactStyle({ theme }),
  };
  const [data, setData] = useState<{
    email: string;
    fullName: string;
    message: string;
    phone: string;
    subject: string;
  }>({ email: "", message: "", fullName: "", subject: "", phone: "" });

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitRequest(true);
    if (form.current)
      emailjs
        .sendForm(
          emailData.SERVICE_ID,
          emailData.TEMPLATE_ID,
          form.current,
          emailData.PUBLIC_KEY
        )
        .then(() => {
          setData({
            email: "",
            message: "",
            fullName: "",
            subject: "",
            phone: "",
          });
          toast.success("Email sent successfully!");
        })
        .catch((error) => {
          toast.error("Something went wrong... try again later!");
          console.log(error.text);
        })
        .finally(() => setSubmitRequest(false));
  };

  return (
    <Grid
      component="section"
      id="contact"
      className={joinStyleClasses(
        classes.section,
        context.mode === "LIGHT" ? classes.sectionBg : "",
        onScreen ? classes.animationVisble : classes.animationHidden
      )}
      {...{ ref }}
    >
      <Grid container justifyContent={"center"}>
        <Grid container item xs={11} sm={8} className={classes.contactCard}>
          <Grid item xs={12} md={5} className={classes.detailsBlock}>
            <Grid component={"h1"} className={classes.title}>
              <Grid component="span" className={classes.contactColor}>
                Contact
              </Grid>{" "}
              Me
            </Grid>
            <Grid className={classes.contactSubTitle}>Let's work together</Grid>
            <Grid className={classes.contactText}>
              Whether it's discussing a potential collaboration, exploring new
              project ideas, or simply engaging in the vibrant tech community,
              I'm always eager to connect. If you have a project in mind, a
              question about web development, or just want to say hello, feel
              free to reach out using the contact form below. I'm excited to
              hear from you and explore how we can bring your ideas to life!
            </Grid>
            <Grid className={classes.contactEmailContainer}>
              <Send className={classes.sendIcon} />
              Wissemslim.w@gmail.com
            </Grid>
            <Grid
              className={classes.linkContainer}
              sx={{ justifyContent: { xs: "center", md: "start" } }}
            >
              <Grid
                component={"a"}
                href={links.github}
                className={classes.link}
                target="_blank"
              >
                <GithubCircle className={classes.linkIcon} />
              </Grid>
              <Grid
                component={"a"}
                className={classes.link}
                href={links.linkedin}
                target="_blank"
              >
                <LinkedinCircle className={classes.linkIcon} />
              </Grid>
              <Grid
                component={"a"}
                className={classes.link}
                href={`mailto:${links.email}`}
              >
                <EmailCircle className={classes.linkIcon} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            component="form"
            ref={form}
            onSubmit={sendEmail}
            className={joinStyleClasses(
              classes.contactFieldCard,
              context.mode === "DARK"
                ? classes.contactFieldCardDark
                : classes.contactFieldCardLight
            )}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  placeholder="Full name"
                  label="Full name"
                  required
                  type="text"
                  name="name"
                  value={data.fullName}
                  onChange={(e) =>
                    setData({ ...data, fullName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  required
                  type="email"
                  placeholder="Email Address"
                  label="Email Address"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  type="text"
                  placeholder="Subject"
                  label="Subject"
                  name="subject"
                  value={data.subject}
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  type="text"
                  placeholder="Phone"
                  label="Phone"
                  name="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.messageInput}>
              <TextInput
                placeholder="Write message here..."
                label="Message text"
                rows={5}
                multiline
                name="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
            </Grid>
            <Grid>
              <Grid item xs={12} className={classes.submitBtncontainer}>
                <Button
                  type="submit"
                  disabled={submitRequest}
                  className={joinStyleClasses(
                    classes.submitBtn,
                    context.mode === "DARK"
                      ? classes.submitBtnDark
                      : classes.submitBtnLight
                  )}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
