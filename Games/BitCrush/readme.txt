How to add assignments/questions/missions to the game:
- open file "BitCrush.js" using a text editor (like Notepad++)
- at the top You will find the line: "var missionsConfig = `"
- below that line place new missions, separated by lines in following format:
	Mission Description | Target1, Target2, Target3, Target4
- follow the pattern to add more missions
- don't edit the rest of the file or the game might break!
- there can be any number of targets that must be picked

Below is a list for all possible targets (refer to the H&P CPU image):
- ALU
- DataMemory
- SignExtender
- ShiftLeft2
