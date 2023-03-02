import random
from time import sleep

print("Welcome to Ahmet's Rock Paper Scissors Game...")

rounds = int(input("How many rounds would you like to play? (Between 1 - 10)"))
counter = 0


def userSelection():
    try:
        noSelection = True
        while noSelection:
            userChoice = input(
                "What is your choice?\nType in...\n1 for Rock\n2 for Paper\n3 for Scissors\nOr press 9 to exit\n"
            )
            if userChoice == '1':
                return 1
            elif userChoice == '2':
                return 2
            elif userChoice == '3':
                return 3
            elif userChoice == '9':
                print("Exiting...")
                noSelection = False
                break
            else:
                print(
                    "Error... Please ensure you select on of the available options"
                )

    except:
        pass


userSelection()
# def randomGenerate():
#     randomNum = random.randint(1, 3)
#     if randomNum == 1:
#         return 'Rock'
#     elif randomNum == 2:
#         return 'Paper'
#     else:
#         return 'Scissors'