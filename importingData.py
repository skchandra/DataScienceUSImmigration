import pandas 
# import numpy
# import matplotlib.pyplot as plt

# //this .py file is meant to help import data and hold all of the data in one place. 
# //This class is specifically meant for asians 

class AsianData:
	def __init__(self):
		self.asian_data_2014 = pandas.read_csv("Asian_ACS_Foreign_Born_Characteristics_2014.csv")
		# self.asian_data_2014 = []

	def total_asian_population(self): 
		total_asian_pop = asian_data_2014["HC01_EST_VC01"].iloc[1]
		total_asian_pop_born_in_Asia = asian_data_2014["HC02_EST_VC01"].iloc[1]
		total_asian_pop_born_in_East_Asia = asian_data_2014["HC03_EST_VC01"].iloc[1]
		total_asian_pop_born_in_South_Asia = asian_data_2014["HC04_EST_VC01"].iloc[1]
		total_asian_pop_born_in_South_Eastern_Asia = asian_data_2014["HC05_EST_VC01"].iloc[1]
		total_asian_pop_born_in_Western_Asia = asian_data_2014["HC06_EST_VC01"].iloc[1]

		return [total_asian_pop, total_asian_pop_born_in_Asia, total_asian_pop_born_in_South_Asia, 
			total_asian_pop_born_in_South_Eastern_Asia, total_asian_pop_born_in_Western_Asia]

	def getDataFrame(self): 
		return asian_data_2014

	def printSomething(self): 
		print 'something'








