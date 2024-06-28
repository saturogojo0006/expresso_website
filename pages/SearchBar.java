import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Scanner;
import org.json.JSONArray;
import org.json.JSONObject;

class Node {
    char ch;
    HashMap<Character, Node> hp;
    boolean isTerminal;
    String meaning;

    Node(char ch, boolean flag, String meaning) {
        this.ch = ch;
        this.isTerminal = flag;
        this.meaning = meaning;
        hp = new HashMap<>();
    }
}

class Trie {
    static Node root;

    Trie() {
        root = new Node('.', false, "Start Node");
    }

    public void insert(String s, String meaning) {
        int n = s.length();

        Node curr = root;
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (curr.hp.containsKey(ch)) {
                curr = curr.hp.get(ch);
            } else {
                Node x = new Node(ch, false, "No Meaning");
                curr.hp.put(ch, x);
                curr = x;
            }
        }
        curr.isTerminal = true;
        curr.meaning = meaning;
    }

    public String search(String s) {
        int n = s.length();
        Node curr = root;

        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (curr.hp.containsKey(ch)) {
                curr = curr.hp.get(ch);
            } else {
                return "Invalid Word";
            }
        }
        return curr.meaning;
    }
}

public class SearchBar {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        Trie dictionary = new Trie();

        while (true) {
            System.out.print("Enter a word (or -1 to exit): ");
            String input = sc.nextLine();
            if (input.equals("-1")) break;
            
            // Fetch data from the API for the entered word and insert into the trie
            fetchDataFromAPI(input, dictionary);
            
            // Display the meaning of the entered word
            System.out.println(dictionary.search(input));
        }
    }

    private static void fetchDataFromAPI(String word, Trie dictionary) throws Exception {
        String apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
        URL url = new URL(apiUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();

        // Parse JSON response and insert into trie
        parseAndInsertData(response.toString(), word, dictionary);
    }

    private static void parseAndInsertData(String response, String word, Trie dictionary) {
        JSONArray jsonArray = new JSONArray(response);
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject entry = jsonArray.getJSONObject(i);
            JSONArray meanings = entry.getJSONArray("meanings");
            for (int j = 0; j < meanings.length(); j++) {
                JSONObject meaningObj = meanings.getJSONObject(j);
                String partOfSpeech = meaningObj.getString("partOfSpeech");
                JSONArray definitions = meaningObj.getJSONArray("definitions");
                for (int k = 0; k < definitions.length(); k++) {
                    JSONObject definitionObj = definitions.getJSONObject(k);
                    String definition = definitionObj.getString("definition");
                    dictionary.insert(word + " (" + partOfSpeech + ")", definition);
                }
            }
        }
    }
}
