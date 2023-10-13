package cloudVandana;

import java.util.HashMap;
import java.util.Map;

public class Panagram {
    public static void main(String args[]){
        String str= "ABCDEFGHIJ'{}afijfKLMNOPQRSTUVWXYZ123";
        Map<Character,Integer> m=new HashMap<>();
        for( int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if(!(m.containsKey(ch)) &&  (ch>='A' && ch<='Z'))
                m.put(ch,1);
        }
        System.out.println(m);
        System.out.println(m.size());
        if(m.size()==26)
            System.out.println("panagram");
        else System.out.println("no");
    }
}
