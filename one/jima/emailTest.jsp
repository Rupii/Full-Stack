/*
to execute the java mail we need to jar files 
1. activation.jar
2. javax.mail.jar 
ensure that these two files in apachetomcat/lib folder
set the classpath for both jar files*/
<%@ page import="java.util.*" %>
<%@ page import="javax.mail.*" %>
<%@ page import="javax.mail.internet.*" %>
<%@ page import="javax.servlet.http.*" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="java.io.*"%>

<%
      String to = request.getParameter("email");//change accordingly
      String msg=request.getParameter("message");//change accordingly

      // Sender's email ID needs to be mentioned
      String from = "durgadevicbit@gmail.com";//change accordingly
      final String username = "durgadevicbit";//change accordingly
      final String password = "********";//change accordingly

      // Assuming you are sending email through relay.jangosmtp.net
      String host = "smtp.gmail.com";

      Properties props = new Properties();
      props.put("mail.smtp.auth", "true");
//      props.put("mail.smtp.starttls.enable", "true");
      props.put("mail.smtp.host", host);// ip address of mail server 
      props.put("mail.smtp.port", "587");// port number for gmail.

      // Get the Session object.
      Session session1 = Session.getInstance(props,
      new javax.mail.Authenticator() {
         protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(username, password);
         }
      });

      try {
         // Create a default MimeMessage object.
         Message message = new MimeMessage(session1);

         // Set From: header field of the header.
         message.setFrom(new InternetAddress(from));

         // Set To: header field of the header.
         message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(to));

         // Set Subject: header field
         message.setSubject("Testing JavaMail");

         // Now set the actual message
         message.setText(msg);

         // Send message
         Transport.send(message);

         

      } catch (MessagingException e) {
            throw new RuntimeException(e);
      }
  out.println("Sent message successfully....");
%>
