import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.Scanner;
public class ReadingWebPage {
   public static void main(String args[]) throws IOException {

      System.out.println("Luka Doncic - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/d/doncilu01.html")));
      System.out.println("Stephen Curry - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/c/curryst01.html")));
      System.out.println("LeBron James - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/j/jamesle01.html")));
      System.out.println("Jaden McDaniels - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/m/mcdanja02.html")));
      System.out.println("Russel Westbrook - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/w/westbru01.html")));
      System.out.println("Jonas Valanciunas - " + Arrays.toString(getStats("https://www.basketball-reference.com/players/v/valanjo01.html")));

   }

   public static String getContent(String urlPlayer) throws IOException {

      URL url = new URL(urlPlayer);
      Scanner sc = new Scanner(url.openStream());
      StringBuffer sb = new StringBuffer();

      while (sc.hasNext()) {
         sb.append(sc.next());
      }

      String result = sb.toString();
      result = result.replaceAll("<[^>]*>", "");

      // Get the Stats
      int indexStats = result.indexOf("2020-21");
      String subContent = result.substring(indexStats, indexStats + 100);

      return subContent;

   }

   public static String[] getStats(String urlPlayer) throws IOException {

      String subContent = getContent(urlPlayer);

      String pts = getStat(subContent, "PTS", "TRB", 0);
      String trb = getStat(subContent, "TRB", "AST", 31);
      String ast = getStat(subContent, "AST", "FG%", 40);
      String fg2 = getStat(subContent, "FG%", "FG3%", 50);
      String fg3 = getStat(subContent, "FG3%", "FT%", 62);
      String ft1 = getStat(subContent, "FT%", "eFG%", 72);

      String[] stats = {pts, trb, ast, fg2, fg3, ft1};
      return stats;

   }

   public static String getStat(String subContent, String statBeg, String statEnd, int value) {

      int space = (statBeg == "FG3%") ? 1 : 0;

      int beg = subContent.indexOf(statBeg);
      int end = subContent.indexOf(".", value);

      String sub = subContent.substring(beg + 3 + space, end + 2);

      return statBeg + ": " + sub;

   }
}