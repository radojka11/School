# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build

# Include any dependencies generated for this target.
include CMakeFiles/test-streamcipher.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/test-streamcipher.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/test-streamcipher.dir/flags.make

CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o: CMakeFiles/test-streamcipher.dir/flags.make
CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o: ../test/test-streamcipher.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o -c /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/test/test-streamcipher.cpp

CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/test/test-streamcipher.cpp > CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.i

CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/test/test-streamcipher.cpp -o CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.s

CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o: CMakeFiles/test-streamcipher.dir/flags.make
CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o: ../src/cipher.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o -c /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/cipher.cpp

CMakeFiles/test-streamcipher.dir/src/cipher.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test-streamcipher.dir/src/cipher.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/cipher.cpp > CMakeFiles/test-streamcipher.dir/src/cipher.cpp.i

CMakeFiles/test-streamcipher.dir/src/cipher.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test-streamcipher.dir/src/cipher.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/cipher.cpp -o CMakeFiles/test-streamcipher.dir/src/cipher.cpp.s

CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o: CMakeFiles/test-streamcipher.dir/flags.make
CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o: ../src/xorsubstitution.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o -c /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/xorsubstitution.cpp

CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/xorsubstitution.cpp > CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.i

CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/xorsubstitution.cpp -o CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.s

CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o: CMakeFiles/test-streamcipher.dir/flags.make
CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o: ../src/streamcipher.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o -c /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/streamcipher.cpp

CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/streamcipher.cpp > CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.i

CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/src/streamcipher.cpp -o CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.s

# Object files for target test-streamcipher
test__streamcipher_OBJECTS = \
"CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o" \
"CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o" \
"CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o" \
"CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o"

# External object files for target test-streamcipher
test__streamcipher_EXTERNAL_OBJECTS =

test-streamcipher: CMakeFiles/test-streamcipher.dir/test/test-streamcipher.cpp.o
test-streamcipher: CMakeFiles/test-streamcipher.dir/src/cipher.cpp.o
test-streamcipher: CMakeFiles/test-streamcipher.dir/src/xorsubstitution.cpp.o
test-streamcipher: CMakeFiles/test-streamcipher.dir/src/streamcipher.cpp.o
test-streamcipher: CMakeFiles/test-streamcipher.dir/build.make
test-streamcipher: CMakeFiles/test-streamcipher.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Linking CXX executable test-streamcipher"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/test-streamcipher.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/test-streamcipher.dir/build: test-streamcipher

.PHONY : CMakeFiles/test-streamcipher.dir/build

CMakeFiles/test-streamcipher.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/test-streamcipher.dir/cmake_clean.cmake
.PHONY : CMakeFiles/test-streamcipher.dir/clean

CMakeFiles/test-streamcipher.dir/depend:
	cd /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build /home/andrej/Documents/LastSchoolYear/FSST/cpp_workspace/03-oop123/04_cipher_diffie_hellman/build/CMakeFiles/test-streamcipher.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/test-streamcipher.dir/depend
