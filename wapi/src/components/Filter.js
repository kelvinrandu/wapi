import { Box, Text, Stack, CheckboxGroup,Flex, Spinner, Checkbox} from '@chakra-ui/react';
// import { useCategories } from "../../graphql/hooks";
import React, { useState ,useEffect} from "react";
import { useSearch } from "../utils/search";




const Filters = (props) => {
  // const [checkedItems, setCheckedItems] = useState([false, false])
  const [checkedItems1, setCheckedItems1] = useState(false)
  const [checkedItems2, setCheckedItems2] = useState(false)
  const [checkedItems3, setCheckedItems3] = useState( false)
  const handleselect = (e) =>{
    return 'here';
    }
    useEffect(() => {
   
     
            //add this below comment ↓ 
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedItems1]);

//   const {
//     categoryFilter,
//     onFilterCategoryType,
//   } = useSearch();

//     const { data, loading } = useCategories();
//     const allCategories = data ? data.categories : [];
const isIndeterminate = checkedItems2 || checkedItems3 && !checkedItems1

    return (
      <Stack spacing={8} mb={8} p="6" {...props}>
        <Box>
          <Text mb={2} fontWeight="bold">
            {"Categories"}
          </Text>
          <Checkbox
        isChecked={checkedItems1}
        // isIndeterminate={isIndeterminate}
        onChange={(e) =>{ 
   
          setCheckedItems1([e.target.checked])
      
        }}
      >
        Restaurants
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems2}
          onChange={(e) =>{ 
            setCheckedItems2(e.target.checked)
            setCheckedItems3(!e.target.checked)}
          }
        >
          Local
        </Checkbox>
        <Checkbox
          isChecked={checkedItems3}
          onChange={(e) => {
            setCheckedItems3(e.target.checked)
            setCheckedItems2(!e.target.checked)
          }
          }
        >
          International
        </Checkbox>
      </Stack>

          {/* {loading ? (
            <Flex pt={24} align="center" justify="center">
              <Spinner
                size="xl"
                label="
              Loading items"
              />
            </Flex>
          ) : (
            <>
              <Flex direction="column">
                <CheckboxGroup
                  spacing={2}
                  variantColor="teal"
                  onChange={onFilterCategoryType}
                  defaultValue={[
                    "food",
                    "hardware",
                    "textile",
                    "electronics",
                    "drinks",
                  ]}
                  value={categoryFilter}
                >
          
                   <Text>no categories</Text>
                </CheckboxGroup>
              </Flex>
            </>
          )} */}
           {/* <Text>no categories</Text> */}
        </Box>
      </Stack>
    );
};

export default Filters;