import pandas
# import numpy
# import matplotlib.pyplot as plt

# //this .py file is meant to help import data and hold all of the data in one place. 
# //This class is specifically meant for asians 

class AsianData:
	# This is all of the data for the Asian population
	def __init__(self):
		self.asian_data_2014 = pandas.read_csv("Asian_ACS_Foreign_Born_Characteristics_2014.csv")

	def total_asian_population(self): 
		total_asian_pop = self.asian_data_2014["HC01_EST_VC01"].iloc[1]
		total_asian_pop_born_in_Asia = self.asian_data_2014["HC02_EST_VC01"].iloc[1]
		total_asian_pop_born_in_East_Asia = self.asian_data_2014["HC03_EST_VC01"].iloc[1]
		total_asian_pop_born_in_South_Asia = self.asian_data_2014["HC04_EST_VC01"].iloc[1]
		total_asian_pop_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC01"].iloc[1]
		total_asian_pop_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC01"].iloc[1]

		return [total_asian_pop, total_asian_pop_born_in_Asia, total_asian_pop_born_in_South_Asia, 
			total_asian_pop_born_in_South_Eastern_Asia, total_asian_pop_born_in_Western_Asia]

	def getDataFrame(self): 
		return asian_data_2014

	def enrolled_in_school_total(self): 
		pop_3_years_and_older_enrolled_in_school_total = self.asian_data_2014["HC01_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_total_nursery = self.asian_data_2014["HC01_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_total_elem = self.asian_data_2014["HC01_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_total_high = self.asian_data_2014["HC01_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_total_college = self.asian_data_2014["HC01_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_total, pop_3_years_and_older_enrolled_in_school_total_nursery, 
		pop_3_years_and_older_enrolled_in_school_total_elem, pop_3_years_and_older_enrolled_in_school_total_high, 
		pop_3_years_and_older_enrolled_in_school_total_college ]

	def enrolled_in_school_born_in_asia(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_total = self.asian_data_2014["HC02_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_nursery = self.asian_data_2014["HC02_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_elem = self.asian_data_2014["HC02_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_high = self.asian_data_2014["HC02_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_college = self.asian_data_2014["HC02_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Asia_total, pop_3_years_and_older_enrolled_in_school_born_in_Asia_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_elem, pop_3_years_and_older_enrolled_in_school_born_in_Asia_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Asia_college]

	def enrolled_in_school_born_in_eastern_asia(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_total = self.asian_data_2014["HC03_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_nursery = self.asian_data_2014["HC03_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_elem = self.asian_data_2014["HC03_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_high = self.asian_data_2014["HC03_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_college = self.asian_data_2014["HC03_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_total, pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_elem, pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Eastern_Asia_college]


	def enrolled_in_school_born_in_south_central_asia(self):
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_total = self.asian_data_2014["HC04_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_nursery = self.asian_data_2014["HC04_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_elem = self.asian_data_2014["HC04_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_high = self.asian_data_2014["HC04_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_college = self.asian_data_2014["HC04_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_total, pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_elem, pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_South_Central_Asia_college]

	def enrolled_in_school_born_in_south_eastern_asia(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_total = self.asian_data_2014["HC05_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_nursery = self.asian_data_2014["HC05_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_elem = self.asian_data_2014["HC05_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_high = self.asian_data_2014["HC05_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_college = self.asian_data_2014["HC05_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_total, pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_elem, pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_high,
		pop_3_years_and_older_enrolled_in_school_born_in_South_Eastern_Asia_college]

	def enrolled_in_school_born_in_western_asia(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_total = self.asian_data_2014["HC05_EST_VC57"]
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_nursery = self.asian_data_2014["HC05_EST_VC58"]
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_elem = self.asian_data_2014["HC05_EST_VC59"]
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_high = self.asian_data_2014["HC05_EST_VC60"]
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_college = self.asian_data_2014["HC05_EST_VC61"]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_total, pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_elem, pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Western_Asia_college]

	def educ_attainment_born_in_asia(self): 
		educ_attainment_pop_born_in_Asia = self.asian_data_2014["HC02_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Asia = self.asian_data_2014["HC02_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Asia = self.asian_data_2014["HC02_EST_VC66"].iloc[1]
		some_college_born_in_Asia = self.asian_data_2014["HC02_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Asia = self.asian_data_2014["HC02_EST_VC68"].iloc[1]
		graduate_degree_born_in_Asia = self.asian_data_2014["HC02_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Asia, less_than_hs_grad_born_in_Asia, hs_grad_total_born_in_Asia, 
		 some_college_born_in_Asia, bachelors_degree_born_in_Asia, graduate_degree_born_in_Asia]

	def educ_attainment_born_in_eastern_asia(self): 
		educ_attainment_pop_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC66"].iloc[1]
		some_college_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC68"].iloc[1]
		graduate_degree_born_in_Eastern_Asia = self.asian_data_2014["HC03_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Eastern_Asia, less_than_hs_grad_born_in_Eastern_Asia, hs_grad_total_born_in_Eastern_Asia, 
		some_college_born_in_Eastern_Asia, bachelors_degree_born_in_Eastern_Asia, graduate_degree_born_in_Eastern_Asia]

	def educ_attainment_born_in_south_central_asia(self): 
		educ_attainment_pop_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC65"].iloc[1]
		hs_grad_total_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC66"].iloc[1]
		some_college_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC67"].iloc[1]
		bachelors_degree_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC68"].iloc[1]
		graduate_degree_born_in_South_Central_Asia = self.asian_data_2014["HC04_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_South_Central_Asia, less_than_hs_grad_born_in_South_Central_Asia,
		hs_grad_total_born_in_South_Central_Asia, some_college_born_in_South_Central_Asia, bachelors_degree_born_in_South_Central_Asia, 
		 graduate_degree_born_in_South_Central_Asia]

	def educ_attainment_born_in_south_eastern_asia(self): 
		educ_attainment_pop_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC65"].iloc[1]
		hs_grad_total_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC66"].iloc[1]
		some_college_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC67"].iloc[1]
		bachelors_degree_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC68"].iloc[1]
		graduate_degree_born_in_South_Eastern_Asia = self.asian_data_2014["HC05_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_South_Eastern_Asia, less_than_hs_grad_born_in_South_Eastern_Asia,
		 hs_grad_total_born_in_South_Eastern_Asia, some_college_born_in_South_Eastern_Asia, bachelors_degree_born_in_South_Eastern_Asia, 
		 graduate_degree_born_in_South_Eastern_Asia]

	def educ_attainment_born_in_western_asia(self): 
		educ_attainment_pop_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC66"].iloc[1]
		some_college_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC68"].iloc[1]
		graduate_degree_born_in_Western_Asia = self.asian_data_2014["HC06_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Western_Asia, less_than_hs_grad_born_in_Western_Asia, hs_grad_total_born_in_Western_Asia, 
		some_college_born_in_Western_Asia, bachelors_degree_born_in_Western_Asia, graduate_degree_born_in_Western_Asia]


class African_NorthernAmerica_and_OceaniaData: 
	# This is all of the data for the foreign born group from Northern American, Africa, and Oceania
	def __init__(self):
		self.african_northernamerica_and_oceania_data_2014 = pandas.read_csv("African_Northern_America_and_Oceania_ACS_Foreign_Born_Characteristics_2014.csv")

	def total_african_northamerican_and_oceania_population(self): 
		total_pop = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC01"].iloc[1]
		total_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC01"].iloc[1]
		total_pop_born_in_North_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC01"].iloc[1]
		total_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC01"].iloc[1]

		return [total_pop, total_pop_born_in_Africa, total_pop_born_in_North_America, total_pop_born_in_Oceania]

	def enrolled_in_school_total(self): 
		pop_3_years_and_older_enrolled_in_school_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_nursery = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_elem = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_high = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_college = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_total, pop_3_years_and_older_enrolled_in_school_total_nursery, 
		pop_3_years_and_older_enrolled_in_school_total_elem, pop_3_years_and_older_enrolled_in_school_total_high, 
		pop_3_years_and_older_enrolled_in_school_total_college ]

	def enrolled_in_school_born_in_Africa(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_total = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_nursery = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_elem = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_high = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_college = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Africa_total, pop_3_years_and_older_enrolled_in_school_born_in_Africa_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_elem , pop_3_years_and_older_enrolled_in_school_born_in_Africa_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Africa_college]

	def enrolled_in_school_born_in_Northern_America(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_total = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_nursery = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_elem = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_high = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_college = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_total, pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_elem , pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_America_college]

	def enrolled_in_school_born_in_Oceania(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_total = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_nursery = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_elem = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_high = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_college = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Oceania_total, pop_3_years_and_older_enrolled_in_school_born_in_Oceania_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_elem , pop_3_years_and_older_enrolled_in_school_born_in_Oceania_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Oceania_college]

	def educ_attainment_total(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		less_than_hs_grad_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC65"].iloc[1]
		hs_grad_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC66"].iloc[1]
		some_college_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC67"].iloc[1]
		bachelors_degree_total= self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC68"].iloc[1]
		graduate_degree_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC69"].iloc[1]

		return [educ_attainment_pop_total, less_than_hs_grad_total, hs_grad_total, 
		 some_college_total, bachelors_degree_total, graduate_degree_total]

	def educ_attainment_born_in_Africa(self): 
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC66"].iloc[1]
		some_college_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC68"].iloc[1]
		graduate_degree_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC69"].iloc[1]

 		return [educ_attainment_pop_born_in_Africa, less_than_hs_grad_born_in_Africa, hs_grad_total_born_in_Africa, 
		 some_college_born_in_Africa, bachelors_degree_born_in_Africa, graduate_degree_born_in_Africa]

	def educ_attainment_born_in_Northern_America(self): 
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC66"].iloc[1]
		some_college_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC68"].iloc[1]
		graduate_degree_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Northern_America, less_than_hs_grad_born_in_Northern_America, hs_grad_total_born_in_Northern_America, 
		 some_college_born_in_Northern_America, bachelors_degree_born_in_Northern_America, graduate_degree_born_in_Northern_America]

	def educ_attainment_born_in_Oceania(self): 
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC66"].iloc[1]
		some_college_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC68"].iloc[1]
		graduate_degree_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Oceania, less_than_hs_grad_born_in_Oceania, hs_grad_total_born_in_Oceania, 
		 some_college_born_in_Oceania, bachelors_degree_born_in_Oceania, graduate_degree_born_in_Oceania]

	def less_than_hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		total_born_in_Africa = int(educ_attainment_pop_born_in_Africa)/100
		total_born_in_Northern_America = int(educ_attainment_pop_born_in_Northern_America)/100
		total_born_in_Oceania = int(educ_attainment_pop_born_in_Oceania)/100 
		
		less_than_hs_grad_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC65"].iloc[1]

		print "floats", [float(less_than_hs_grad_born_in_Africa), 
    	float(less_than_hs_grad_born_in_Northern_America),
    	float(less_than_hs_grad_born_in_Oceania)]

		return [float(less_than_hs_grad_born_in_Africa), 
    	float(less_than_hs_grad_born_in_Northern_America),
    	float(less_than_hs_grad_born_in_Oceania)]

  	def hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		total_born_in_Africa = int(educ_attainment_pop_born_in_Africa)/100
		total_born_in_Northern_America = int(educ_attainment_pop_born_in_Northern_America)/100
		total_born_in_Oceania = int(educ_attainment_pop_born_in_Oceania)/100 

		hs_grad_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC66"].iloc[1] 

		print " hs grad total, africa, northern america, and oceania", hs_grad_total, hs_grad_total_born_in_Africa, hs_grad_total_born_in_Northern_America, hs_grad_total_born_in_Oceania 

		return [float(hs_grad_total_born_in_Africa), 
    	float(hs_grad_total_born_in_Northern_America),
    	float(hs_grad_total_born_in_Oceania)]

  	def some_college_fraction_of_whole(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		total_born_in_Africa = int(educ_attainment_pop_born_in_Africa)/100
		total_born_in_Northern_America = int(educ_attainment_pop_born_in_Northern_America)/100
		total_born_in_Oceania = int(educ_attainment_pop_born_in_Oceania)/100 

		some_college_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC67"].iloc[1]
		some_college_total_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC67"].iloc[1]
		some_college_total_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC67"].iloc[1]
		some_college_total_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC67"].iloc[1] 

		print "some college born in africa, northern america, and oceania", some_college_total_born_in_Africa, some_college_total_born_in_Northern_America, some_college_total_born_in_Oceania 

		return [float(some_college_total_born_in_Africa), 
    	float(some_college_total_born_in_Northern_America),
    	float(some_college_total_born_in_Oceania)]

  	def bachelors_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		total_born_in_Africa = int(educ_attainment_pop_born_in_Africa)/100
		total_born_in_Northern_America = int(educ_attainment_pop_born_in_Northern_America)/100
		total_born_in_Oceania = int(educ_attainment_pop_born_in_Oceania)/100 

		bachelors_degree_total= self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC68"].iloc[1]

		return [float(bachelors_degree_born_in_Africa), 
    	float(bachelors_degree_born_in_Northern_America),
    	float(bachelors_degree_born_in_Oceania)]

  	def graduate_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		total_born_in_Africa = int(educ_attainment_pop_born_in_Africa)/100
		total_born_in_Northern_America = int(educ_attainment_pop_born_in_Northern_America)/100
		total_born_in_Oceania = int(educ_attainment_pop_born_in_Oceania)/100  

		graduate_degree_total = self.african_northernamerica_and_oceania_data_2014["HC01_EST_VC69"].iloc[1]
		graduate_degree_born_in_Africa = self.african_northernamerica_and_oceania_data_2014["HC02_EST_VC69"].iloc[1]
		graduate_degree_born_in_Northern_America = self.african_northernamerica_and_oceania_data_2014["HC03_EST_VC69"].iloc[1]
		graduate_degree_born_in_Oceania = self.african_northernamerica_and_oceania_data_2014["HC04_EST_VC69"].iloc[1]

		print "grad degree for all", graduate_degree_born_in_Africa, graduate_degree_born_in_Northern_America, graduate_degree_born_in_Oceania
		return [float(graduate_degree_born_in_Africa), 
    	float(graduate_degree_born_in_Northern_America),
    	float(graduate_degree_born_in_Oceania)]


class EuropeanData: 
	def __init__(self):
		self.european_data_2014 = pandas.read_csv("Europe_ACS_Foreign_Born_Characteristics_2014.csv")

# This contained all of the data for foreign born group from Europe
	def enrolled_in_school_total(self): 
		pop_3_years_and_older_enrolled_in_school_total = self.european_data_2014["HC01_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_nursery = self.european_data_2014["HC01_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_elem = self.european_data_2014["HC01_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_high = self.european_data_2014["HC01_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_college = self.european_data_2014["HC01_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_total, pop_3_years_and_older_enrolled_in_school_total_nursery, 
		pop_3_years_and_older_enrolled_in_school_total_elem, pop_3_years_and_older_enrolled_in_school_total_high, 
		pop_3_years_and_older_enrolled_in_school_total_college ]

	def enrolled_in_school_born_in_Europe(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_total = self.european_data_2014["HC02_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_nursery = self.european_data_2014["HC02_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_elem = self.european_data_2014["HC02_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_high = self.european_data_2014["HC02_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_college = self.european_data_2014["HC02_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Europe_total, pop_3_years_and_older_enrolled_in_school_born_in_Europe_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_elem , pop_3_years_and_older_enrolled_in_school_born_in_Europe_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Europe_college]

	def enrolled_in_school_born_in_Nothern_and_Western_Europe(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_total = self.european_data_2014["HC03_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_nursery = self.european_data_2014["HC03_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_elem = self.european_data_2014["HC03_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_high = self.european_data_2014["HC03_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_college = self.european_data_2014["HC03_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_total, pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_elem , pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Northern_and_Western_Europe_college]

	def enrolled_in_school_born_in_Southern_and_Eastern_Europe(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_total = self.european_data_2014["HC04_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_nursery = self.european_data_2014["HC04_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_elem = self.european_data_2014["HC04_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_high = self.european_data_2014["HC04_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_college = self.european_data_2014["HC04_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_total, pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_elem , pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Southern_and_Eastern_Europe_college]

#educational attainment


	def educ_attainment_born_in_Europe(self): 
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Europe = self.european_data_2014["HC02_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Europe = self.european_data_2014["HC02_EST_VC66"].iloc[1]
		some_college_born_in_Europe = self.european_data_2014["HC02_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC68"].iloc[1]
		graduate_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Europe, less_than_hs_grad_born_in_Europe, hs_grad_total_born_in_Europe, 
		 some_college_born_in_Europe, bachelors_degree_born_in_Europe, graduate_degree_born_in_Europe]

	def educ_attainment_born_in_Northern_and_Western_Europe(self): 
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC66"].iloc[1]
		some_college_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC68"].iloc[1]
		graduate_degree_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC69"].iloc[1]


		return [educ_attainment_pop_born_in_Northern_and_Western_Europe, less_than_hs_grad_born_in_Northern_and_Western_Europe, hs_grad_total_born_in_Northern_and_Western_Europe, 
		 some_college_born_in_Northern_and_Western_Europe, bachelors_degree_born_in_Northern_and_Western_Europe, graduate_degree_born_in_Northern_and_Western_Europe]

	def educ_attainment_born_in_Southern_and_Eastern_Europe(self): 
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC66"].iloc[1]
		some_college_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC68"].iloc[1]
		graduate_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Southern_and_Eastern_Europe, less_than_hs_grad_born_in_Southern_and_Eastern_Europe, hs_grad_total_born_in_Southern_and_Eastern_Europe, 
		 some_college_born_in_Southern_and_Eastern_Europe, bachelors_degree_born_in_Southern_and_Eastern_Europe, graduate_degree_born_in_Southern_and_Eastern_Europe]
	
	#each type of degree

	def less_than_hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 
		
		less_than_hs_grad_total = self.european_data_2014["HC01_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Europe = self.european_data_2014["HC02_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC65"].iloc[1]

		return [float(less_than_hs_grad_born_in_Europe), 
    	float(less_than_hs_grad_born_in_Northern_and_Western_Europe),
    	float(less_than_hs_grad_born_in_Southern_and_Eastern_Europe)]

	def hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		hs_grad_total = self.european_data_2014["HC01_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Europe = self.european_data_2014["HC02_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Southern_and_Eastern_Europe  = self.european_data_2014["HC04_EST_VC66"].iloc[1] 
		
		return [float(hs_grad_total_born_in_Europe), 
    	float(hs_grad_total_born_in_Northern_and_Western_Europe),
    	float(hs_grad_total_born_in_Southern_and_Eastern_Europe )]

  	def bachelors_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		bachelors_degree_total= self.european_data_2014["HC01_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC68"].iloc[1]

		return [float(bachelors_degree_born_in_Europe), 
    	float(bachelors_degree_born_in_Northern_and_Western_Europe),
    	float(bachelors_degree_born_in_Southern_and_Eastern_Europe)]

  	def graduate_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		graduate_degree_total = self.european_data_2014["HC01_EST_VC69"].iloc[1]
		graduate_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC69"].iloc[1]
		graduate_degree_born_in_Northern_America = self.european_data_2014["HC03_EST_VC69"].iloc[1]
		graduate_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC69"].iloc[1]

		return [float(graduate_degree_born_in_Europe), 
    	float(graduate_degree_born_in_Northern_and_Western_Europe),
    	float(graduate_degree_born_in_Southern_and_Eastern_Europe)]

  	def some_college_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		some_college_total = self.european_data_2014["HC01_EST_VC67"].iloc[1]
		some_college_total_born_in_Europe = self.european_data_2014["HC02_EST_VC67"].iloc[1]
		some_college_total_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC67"].iloc[1]
		some_college_total_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC67"].iloc[1]

		return [float(some_college_total_born_in_Europe), 
    	float(some_college_total_born_in_Northern_and_Western_Europe),
    	float(some_college_total_born_in_Southern_and_Eastern_Europe)]


class LatinAmericaData: 
	# This class contains all of the information from the forrign born group from Latin America
	def __init__(self):
		self.latin_america_data_2014 = pandas.read_csv("Latin_America_ACS_Foreign_Born_Characteristics_2014.csv")

	def enrolled_in_school_total(self): 
		pop_3_years_and_older_enrolled_in_school_total = self.latin_america_data_2014["HC01_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_nursery = self.latin_america_data_2014["HC01_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_elem = self.latin_america_data_2014["HC01_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_high = self.latin_america_data_2014["HC01_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_total_college = self.latin_america_data_2014["HC01_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_total, pop_3_years_and_older_enrolled_in_school_total_nursery, 
		pop_3_years_and_older_enrolled_in_school_total_elem, pop_3_years_and_older_enrolled_in_school_total_high, 
		pop_3_years_and_older_enrolled_in_school_total_college ]

	def enrolled_in_school_born_in_Latin_America(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_total = self.latin_america_data_2014["HC02_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_nursery = self.latin_america_data_2014["HC02_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_elem = self.latin_america_data_2014["HC02_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_high = self.latin_america_data_2014["HC02_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_college = self.latin_america_data_2014["HC02_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_total, pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_elem , pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Latin_America_college]

	def enrolled_in_school_born_in_Mexico(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_total = self.latin_america_data_2014["HC03_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_nursery = self.latin_america_data_2014["HC03_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_elem = self.latin_america_data_2014["HC03_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_high = self.latin_america_data_2014["HC03_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_college = self.latin_america_data_2014["HC03_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Mexico_total, pop_3_years_and_older_enrolled_in_school_born_in_Mexico_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_elem , pop_3_years_and_older_enrolled_in_school_born_in_Mexico_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Mexico_college]

	def enrolled_in_school_born_in_Central_America(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_total = self.latin_america_data_2014["HC04_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_nursery = self.latin_america_data_2014["HC04_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_elem = self.latin_america_data_2014["HC04_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_high = self.latin_america_data_2014["HC04_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_college = self.latin_america_data_2014["HC04_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Central_America_total, pop_3_years_and_older_enrolled_in_school_born_in_Central_America_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_elem , pop_3_years_and_older_enrolled_in_school_born_in_Central_America_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Central_America_college]

	def enrolled_in_school_born_in_Carribean(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_total = self.latin_america_data_2014["HC05_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_nursery = self.latin_america_data_2014["HC05_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_elem = self.latin_america_data_2014["HC05_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_high = self.latin_america_data_2014["HC05_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_college = self.latin_america_data_2014["HC05_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_Carribean_total, pop_3_years_and_older_enrolled_in_school_born_in_Carribean_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_elem , pop_3_years_and_older_enrolled_in_school_born_in_Carribean_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_Carribean_college]

	def enrolled_in_school_born_in_South_America(self): 
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_total = self.latin_america_data_2014["HC06_EST_VC57"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_nursery = self.latin_america_data_2014["HC06_EST_VC58"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_elem = self.latin_america_data_2014["HC06_EST_VC59"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_high = self.latin_america_data_2014["HC06_EST_VC60"].iloc[1]
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_college = self.latin_america_data_2014["HC06_EST_VC61"].iloc[1]

		return [pop_3_years_and_older_enrolled_in_school_born_in_South_America_total, pop_3_years_and_older_enrolled_in_school_born_in_South_America_nursery, 
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_elem , pop_3_years_and_older_enrolled_in_school_born_in_South_America_high, 
		pop_3_years_and_older_enrolled_in_school_born_in_South_America_college]

	def educ_attainment_born_in_Latin_America(self): 
		educ_attainment_pop_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC66"].iloc[1]
		some_college_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC68"].iloc[1]
		graduate_degree_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Latin_America, less_than_hs_grad_born_in_Latin_America, hs_grad_total_born_in_Latin_America, 
		 some_college_born_in_Europe, bachelors_degree_born_in_Latin_America, graduate_degree_born_in_Latin_America]

	def educ_attainment_born_in_Mexico(self): 
		educ_attainment_pop_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC66"].iloc[1]
		some_college_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC68"].iloc[1]
		graduate_degree_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC69"].iloc[1]


		return [educ_attainment_pop_born_in_Mexico, less_than_hs_grad_born_in_Mexico, hs_grad_total_born_in_Mexico, 
		 some_college_born_in_Mexico, bachelors_degree_born_in_Mexico, graduate_degree_born_in_Mexico]

	def educ_attainment_born_in_Central_America(self): 
		educ_attainment_pop_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC66"].iloc[1]
		some_college_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC68"].iloc[1]
		graduate_degree_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Central_America, less_than_hs_grad_born_in_Central_America, hs_grad_total_born_in_Central_America, 
		 some_college_born_in_Central_America, bachelors_degree_born_in_Central_America, graduate_degree_born_in_Central_America]

	def educ_attainment_born_in_Carribean(self): 
		educ_attainment_pop_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC65"].iloc[1]
		hs_grad_total_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC66"].iloc[1]
		some_college_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC67"].iloc[1]
		bachelors_degree_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC68"].iloc[1]
		graduate_degree_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_Carribean, less_than_hs_grad_born_in_Carribean, hs_grad_total_born_in_Carribean, 
		 some_college_born_in_Carribean, bachelors_degree_born_in_Carribean, graduate_degree_born_in_Carribean]

	def educ_attainment_born_in_South_America(self): 
		educ_attainment_pop_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC64"].iloc[1]
		less_than_hs_grad_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC65"].iloc[1]
		hs_grad_total_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC66"].iloc[1]
		some_college_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC67"].iloc[1]
		bachelors_degree_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC68"].iloc[1]
		graduate_degree_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC69"].iloc[1]

		return [educ_attainment_pop_born_in_South_America, less_than_hs_grad_born_in_South_America, hs_grad_total_born_in_South_America, 
		 some_college_born_in_South_America, bachelors_degree_born_in_South_America, graduate_degree_born_in_South_America]

	def less_than_hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC64"].iloc[1]

		educ_attainment_pop_born_in_Latin_America = int(educ_attainment_pop_born_in_Latin_America)/100
		educ_attainment_pop_born_in_Mexico = int(educ_attainment_pop_born_in_Mexico)/100
		educ_attainment_pop_born_in_Central_America = int(educ_attainment_pop_born_in_Central_America)/100 
		educ_attainment_pop_born_in_Carribean = int(educ_attainment_pop_born_in_Carribean)/100
		educ_attainment_pop_born_in_South_America = int(educ_attainment_pop_born_in_South_America)/100 
		
		less_than_hs_grad_total = self.european_data_2014["HC01_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC65"].iloc[1]
		less_than_hs_grad_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC65"].iloc[1]

		return [float(less_than_hs_grad_born_in_Latin_America), 
    	float(less_than_hs_grad_born_in_Mexico),
    	float(less_than_hs_grad_born_in_Central_America), 
    	float(less_than_hs_grad_born_in_Carribean),
    	float(less_than_hs_grad_born_in_South_America)]

	def hs_grad_fraction_of_whole(self): 
		educ_attainment_pop_born_in_Latin_America = self.latin_america_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Mexico = self.latin_america_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Central_America = self.latin_america_data_2014["HC04_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Carribean = self.latin_america_data_2014["HC05_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_South_America = self.latin_america_data_2014["HC06_EST_VC64"].iloc[1]

		educ_attainment_pop_born_in_Latin_America = int(educ_attainment_pop_born_in_Latin_America)/100
		educ_attainment_pop_born_in_Mexico = int(educ_attainment_pop_born_in_Mexico)/100
		educ_attainment_pop_born_in_Central_America = int(educ_attainment_pop_born_in_Central_America)/100 
		educ_attainment_pop_born_in_Carribean = int(educ_attainment_pop_born_in_Carribean)/100
		educ_attainment_pop_born_in_South_America = int(educ_attainment_pop_born_in_South_America)/100 

		hs_grad_total = self.european_data_2014["HC01_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Europe = self.european_data_2014["HC02_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC66"].iloc[1]
		hs_grad_total_born_in_Southern_and_Eastern_Europe  = self.european_data_2014["HC04_EST_VC66"].iloc[1] 
		
		return [float(hs_grad_total_born_in_Europe), 
    	float(hs_grad_total_born_in_Northern_and_Western_Europe),
    	float(hs_grad_total_born_in_Southern_and_Eastern_Europe )]

  	def bachelors_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		bachelors_degree_total= self.european_data_2014["HC01_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC68"].iloc[1]
		bachelors_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC68"].iloc[1]

		return [float(bachelors_degree_born_in_Europe), 
    	float(bachelors_degree_born_in_Northern_and_Western_Europe),
    	float(bachelors_degree_born_in_Southern_and_Eastern_Europe)]

  	def graduate_degree_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		graduate_degree_total = self.european_data_2014["HC01_EST_VC69"].iloc[1]
		graduate_degree_born_in_Europe = self.european_data_2014["HC02_EST_VC69"].iloc[1]
		graduate_degree_born_in_Northern_America = self.european_data_2014["HC03_EST_VC69"].iloc[1]
		graduate_degree_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC69"].iloc[1]

		return [float(graduate_degree_born_in_Europe), 
    	float(graduate_degree_born_in_Northern_and_Western_Europe),
    	float(graduate_degree_born_in_Southern_and_Eastern_Europe)]

  	def some_college_fraction_of_whole(self): 
		educ_attainment_pop_total = self.european_data_2014["HC01_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Europe = self.european_data_2014["HC02_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC64"].iloc[1]
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC64"].iloc[1]

		total = int(educ_attainment_pop_total)/100
		educ_attainment_pop_born_in_Europe = int(educ_attainment_pop_born_in_Europe)/100
		educ_attainment_pop_born_in_Northern_and_Western_Europe = int(educ_attainment_pop_born_in_Northern_and_Western_Europe)/100
		educ_attainment_pop_born_in_Southern_and_Eastern_Europe = int(educ_attainment_pop_born_in_Southern_and_Eastern_Europe)/100 

		some_college_total = self.european_data_2014["HC01_EST_VC67"].iloc[1]
		some_college_total_born_in_Europe = self.european_data_2014["HC02_EST_VC67"].iloc[1]
		some_college_total_born_in_Northern_and_Western_Europe = self.european_data_2014["HC03_EST_VC67"].iloc[1]
		some_college_total_born_in_Southern_and_Eastern_Europe = self.european_data_2014["HC04_EST_VC67"].iloc[1]

		return [float(some_college_total_born_in_Europe), 
    	float(some_college_total_born_in_Northern_and_Western_Europe),
    	float(some_college_total_born_in_Southern_and_Eastern_Europe)]

