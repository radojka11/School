// a.hofmann jan 2005
// t_stackinterpreterv4.cc
// g++ t_stackinterpreterv4.cc stackinterpreterv4.cc stackengine.cpp -DDEBUG

#include "stackinterpreterv4.h"
#include <iostream>
using namespace std;

int main(){
	CStackinterpreter myInterpreter;
	string input;
	
	cout << "\n\n.............................. Stackinterpreter-Test: ................................" <<endl;
	
	cout << "\nProg.name: (stackivN.stk) (quit=ende):> ";
	cin >>input;
	while (input != "quit"){
		myInterpreter.reset();
		myInterpreter.open(input.c_str());
		myInterpreter.run();
	
		//cout << endl;
		//cout<< myInterpreter;

		cout << endl;
		// seit V4 nicht mehr notwendig, weil
		// write oberstes element ausgibt und vom stack nimmt
		//cout <<"Ergebnis: " << myInterpreter.top() << endl;
	
		cout << "\nProg.name: (quit=ende):> ";
		cin >>input;
	}
}
