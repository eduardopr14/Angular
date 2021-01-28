import java.io.IOException;
import java.net.URL;
import java.util.Scanner;
public class ReadingWebPage {
   public static void main(String args[]) throws IOException {

      //Instantiating the URL class
      URL url = new URL("https://www.basketball-reference.com/players/c/curryst01.html");

      //Retrieving the contents of the specified page
      Scanner sc = new Scanner(url.openStream());

      //Instantiating the StringBuffer class to hold the result
      StringBuffer sb = new StringBuffer();

      while(sc.hasNext()) {
         sb.append(sc.next());
         //System.out.println(sc.next());
      }

      //Retrieving the String from the String Buffer object
      String result = sb.toString();
      //System.out.println(result);
      
      //Removing the HTML tags
      result = result.replaceAll("<[^>]*>", "");
      
      int indexContent = result.indexOf("PTS");
      //System.out.println("Index: " +indexContent);
      String sub = result.substring(indexContent, indexContent + 7);
      System.out.println(sub);

      indexContent = result.indexOf("TRB");
      //System.out.println("Index: " +indexContent);
      sub = result.substring(indexContent, indexContent + 6);
      System.out.println(sub);

      indexContent = result.indexOf("AST");
      //System.out.println("Index: " +indexContent);
      sub = result.substring(indexContent, indexContent + 6);
      System.out.println(sub);

      //System.out.println("Contents of the web page: " +result);

   }
}