# Aufgaben: Basic2

1. Quadrant
2. Summe3
3. Summe4
4. Fakt
5. Quadrate
6. Einmaleins
7. Perfekte Zahl
8. Vielfache von 3 und 5
9. Quadratgleichung
10. Folge
11. Fib
12. Kreispunkt
13. Heron
14. Rate
15. Quersumme
16. Schaltjahr
17. Fragen/Zusammenfassung

---

## Quadrant

- Lies 2 Integer-Werte ein (x_koordinate, y_koordinate) und gib aus,
- welchem Quadranten diese Werte zuzuordnen sind.
- Es soll auch ausgegeben werden, ob der Punkt auf der x-Achse bzw. y-Achse bzw der Ursprung ist.

Folg. Ausgaben sollen möglich sein:
~~~
Der Punkt (10,20) liegt im 1.Quadranten
Der Punkt (0,0) ist der Ursprung
Der Punkt (0,12) liegt auf der y-Achse
....
~~~

---

## Summe3

- Lies solange Integer Werte ein bis die Summe der eingelesenen Werte grösser als 20 ist.
- Gib dann die Summe aus

---

## Summe4

Lies 10 Zahlen ein (verwende eine for-Schleife) und

- a) summiere alle eingebenen Werte auf
- b) summiere nur die positiven Werte auf
- c) summiere nur die geraden Werte auf
- d) summiere nur die Werte zwischen -5 und +5 auf
- e) und gib diese Summen aus.

---

## Fakt

- Lies einen Integer-Wert in die Variable n ein.

~~~
Achtung
der Benutzer darf nur einen Wert zwischen 5 und 10 eingeben. Das Programm fragt den Benutzer sooft nach einer Eingabe, bis dieser endlich einen korrekten Wert eingibt.
~~~

Das Programm gibt dann folgendes aus: 

~~~
(Annahme: 4 wurde eingegeben)
	4! = 24

	Hinweis:
	(n!= 1*2*   *(n-1)*n)
~~~

---

## Quadrate

- 	Gib alle Quadratzahlen von 1 bis 10 aus. Verwende dafür eine for-Schleife

~~~
Ausgabe:
	1,4,9,16,25,36,49,64,81,100
~~~

---

## Einmaleins

- Lies Integer-Zahlen in die Variablen reihe , von , bis   ein und gib folg. aus: 

~~~
(Annahme: 4 , 2, 7 wurde eingegeben)
2 * 4= 8
...
7 * 4=28
~~~

---

## PerfekteZahl

Eine natürliche Zahl n nennt man eine perfekte Zahl, wenn sie gleich der Summe aller echten Teiler ist.

~~~
Bsp:
Sie Summe der echten Teiler von n soll T(n) bezeichnet werden.
T(6)= 3+2+1
T(28)= 14+7+4+2+1

Hinweis:
echte Teiler von n werden alle natürlichen Teiler von n einschliesslich 1, aber ohne n bezeichnet.
~~~

- Schreiben Sie ein Struktogramm, das n einliest und ausgibt ob es sich um eine perfekte Zahl handelt oder nicht.
- Zusätzlich sollen die Teiler und die Summe der Teiler ausgegeben werden.

---

## Vielfache von 3 oder 5

Berechne die Summe der Zahlen zwischen 1 und 10 (exkl.), die Vielfache von 3 oder 5 sind.

~~~
Beispiel: zahl=10
- Die Vielfachen von 3 (<10) sind:
  6,9
- Die Vielfachen von 5 (<10) sind:
  5
- Die Summe ist 23   (6+9+5)
~~~

- Lies zahl ein und berechne nach der obigen Angabe die Summe der Vielfachen von 3 und 5.

---

## QuadratGleichung

- Lies die Koeffizienten: a,b,c
- berechne die Lösungen: x1, x2

~~~
siehe: 
Mathematikunterricht bzw.
http://de.wikipedia.org/wiki/Quadratische_Gleichung

diskriminante: b*b - 4*a*c
diskriminante  > 0
		-> 2 reele Lösungen
diskriminante  == 0
		-> 1 reele Lösung
diskriminante  < 0
		-> KEINE reele Lösungen

Formel:
			x1= (-b - Math.sqrt((b*b) -4*a*c) ) / (2*a);
			x2= (-b + Math.sqrt((b*b) -4*a*c) ) / (2*a);

Hinweis in C:
#include <math.h>

gcc -lm gquadratGleichung.c -o gquadratGleichung.exe
~~~

---

## Folge

- Das Programm soll unter Verwendung einer Schleife folgende Folge ausgeben:

100 81 64 49 36 25 16 9 4 1

---

## Fib

- Das Programm soll unter Verwendung von Schleifen folgende Folge ausgeben:

0 1 1 2 3 5 8 13 21 34 55 …

- Es sollen die ersten 20 Zahlen ausgegeben werden.

---

## KreisPunkt

Schreiben Sie ein Programm, das feststellt, ob ein gegebener Punkt P(Px,Py) auf der Kreislinie oder innerhalb oder außerhalb liegt. Der Kreis wird durch seinen Mittelpunkt M(Mx- und My- Koordinate) und den Radius (r) bestimmt.

~~~
Hinweis: Abstand 2-er Punkte P(Px,Py) und M(Mx,My)
Math.sqrt((Px-Mx)*(Px-Mx) + (Py-My)*(Py-My));


Hinweis: Dateiumlenkung
java kreisPunkt < kreisPunkt.txt

kreisPunkt.txt
10,0 10,0
5,0 5,0
5,0

Bei diesem Beispiel ist P(10.0,10.0) M(5.0,5.0) r=5.0

Hinweis: Dateiumlenkung
Um Tastatureingabe zu umgehen, kann man die sog. Dateiumlenkung wie folgt benutzen.
1.	KreisPunkt.txt erstellen:
File->new File kreisPunkt.txt 
Daten wie oben eingeben

2.	Terminal starten u. Java-Programm starten
cd home/ws-java/GKreisPunkt/bin   (auf eigene Verzeichnisse anpassen)
java GKreisPunkt < ../kreisPunkt.txt

Hinweis: Scanner verwenden
	Zur Verwendung der Dateiumlenkung, verwenden Sie Scanner zur Eingabe:
	s. 01-lernen/java-grundlagen.odt
~~~

---

## Heron

- Berechnung der Quadratwurzel einer positiven reellen Zahl a.

- Wir wollen die die Newton-Iteration  (sog. HERONsche Formel) programmieren.

- Sie wird zur Berechnung von √a verwendet.

~~~	
Sei a eine positive reelle Zahl ungleich 1.0, dann
konvergiert mit wachsendem  n  für jedes a  > 0.0  die unten gegebene Rechenregel gegen √a.

x(n+1) =  ( x(n) + a / x(n) ) / 2.0
          mit:
          n = 2, 3, ...
          x1 = 1.0    (allg. Wert > 0.0, insb. auch a)

Unter Formulierung einer Genauigkeitbedingung   
	|x(n+1) - x(n) | < eps  
kann diese Iteration mit einer Schleife ausgeführt werden. Erstellen Sie ein vollständiges Programm.

Eingabe:
	a= ...
	eps= ...
	Ausgabe:
	sqrt(a) = ...
~~~

---

## Rate

Programmablaufplan:

- Ermittle eine Zufallszahl im Bereich 1 ... 1000
- Der Benutzer soll nun diese Zahl erraten.


Der Dialog sieht zb. so aus:

~~~	
Computer:	Erraten Sie eine Zahl im Bereich 1 ... 1000

Computer: 	1. Versuch: 
            Geben Sie eine  Zahl im Bereich 1 ... 1000 ein:
Benutzer: 	gibt eine Zahl (hier 55) ein.

Computer:	Ihre Zahl 55 ist zu klein.

Computer: 	2.Versuch:
            Geben Sie eine  Zahl im Bereich 1 ... 1000 ein:

...

Computer: 	Ihre Zahl 67 ist die gesuchte Zahl!!!
~~~	

**Frage:**  
Wieviele Fragen braucht der Benutzer maximal, wenn er nach der Methode der binären Suche vorgeht?

~~~
Hinweis: Zufallszahl bestimmen
	java.util.Random zufall= new java.util.Random();
	int zahl= zufall.nextInt(1000);  // 0...999
~~~

---

## Quersumme

- Ein Programm soll zu einer grösseren positiven Ganzzahl z (z.B.: 8 432 101) die Quersumme Q berechnen und ausgeben.
- Man kann das mit den Operatoren  /  und  %  erledigen.

Anwendung:  
- Bei Scheckkartennummern kann man Lesesicherheit dadurch einbauen, dass die Quersumme gebildet und z.B. MOD 10 als letzte Ziffer hinzugefügt wird.
- Wird eine Ziffer falsch gelesen, stimmt die Quersumme nicht und die Karte wird zurückgewiesen.

---

## Schaltjahr
  
Zur exakten Festlegung eines Schaltjahres dienen die folgenden Regeln:

- Ist eine Jahreszahl durch 4 teilbar, so ist das Jahr ein Schaltjahr. Diese Regel hat allerdings eine Ausahme:
  - Ist die Jahreszahl durch 100 teilbar, so ist das Jahr kein Schaltjahr. Diese Ausnahmen hat wiederrum eine Ausnahme:
    - Ist die Jahreszahl durch 400 teilbar, so ist das Jahr doch ein Schlatjahr.

Erstellen Sie ein Programm, das berechnet, ob eine vom Benutzer eigegebene Jahreszahl ein Schaltjahr ist oder nicht.

---

## Fragen/Prüfungsvorbereitung

- Schreiben Sie auf einem leeren Blatt Papier Ihren Namen und das aktuelle Datum.

~~~
Überschrift:
Meine Programmiertestvorbereitung

Schreiben Sie auswendig ein Beispiel für:

- if bzw. if ... else if ...
- for bzw. while
- eingabe, ausgabe einer int-Variablen
- der Benutzer darf nur Zahlen zwischen 5 und 50 eingeben.
- Wenn die eingebene Zahl zwischen 5 und 15 ist, soll sie ausgegeben werden, sonst soll der Text „zu klein“ ausgeben werden.
  
Können Sie ein obiges Beispiel hier auswendig hinschreiben?
~~~